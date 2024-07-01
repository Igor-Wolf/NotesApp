"use client"
import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  TitleText,
  Main,
  Spacing,
  ErrorBox
} from './styles';
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { format, parseISO, parse } from 'date-fns';
import { MobileHeader } from '@/components/MobileHeader';
import { Wrapper } from './styles';

import { useParams, useRouter } from "next/navigation";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm, Controller } from 'react-hook-form';

const noteSchema = yup.object({
  title: yup.string().min(6, "No mínimo 6 caracteres").max(30, "No máximo 30 caracteres").required("Título é obrigatório"),
  description: yup.string().max(60, "No máximo 60 caracteres").required("Descrição é obrigatória"),
  message: yup.string().required("Preenchimento obrigatório")
}).required();

const eventSchema = yup.object({
  title: yup.string().min(6, "No mínimo 6 caracteres").max(30, "No máximo 30 caracteres").required("Título é obrigatório"),
  description: yup.string().max(60, "No máximo 60 caracteres").required("Descrição é obrigatória"),
  deadLineDate: yup.date().typeError('Data inválida').required("Data do Evento é obrigatória"),
  deadLineTime: yup.string().required("Hora do Evento é obrigatória"),
  message: yup.string().required("Preenchimento obrigatório")
}).required();

export default function Criar() {
  const params = useParams();
  const router = useRouter();

  const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];
  const note = storedList.filter(item => item.id === parseInt(params.id));
  const itemIndex = storedList.findIndex(item => item.id === parseInt(params.id));

  const getInitialValue = (field) => {
    switch (field) {
      case 'description':
        return note[0].type === "nota" ? note[0].description : '';
      case 'title':
        return note[0].type === "nota" ? note[0].title : '';
      case 'message':
        return note[0].type === "nota" ? note[0].message : '';
      default:
        return '';
    }
  };

  const getInitialValue2 = (field) => {
    switch (field) {
      case 'description':
        return note[0].type === "compromisso" ? note[0].description : '';
      case 'title':
        return note[0].type === "compromisso" ? note[0].title : '';
      case 'message':
        return note[0].type === "compromisso" ? note[0].message : '';
      case 'deadLineTime':
        return note[0].type === "compromisso" ? note[0].deadLineTime : '';
      case 'deadLineDate':
        if (note[0].type === "compromisso") {
          const parsedDate = parse(note[0].deadLineDate, 'dd/MM/yyyy', new Date());
          const formattedDate = format(parsedDate, 'yyyy-MM-dd'); 
          return formattedDate;
        }
      default:
        return '';
    }
  };

  const [formData, setFormData] = useState({
    id: '',
    title: getInitialValue("title"),
    description: getInitialValue("description"),
    message: getInitialValue("message"),
    date: '',
    type: '',
    deadLineDate: '',
    deadLineTime: '',
    status: '',
  });

  const [formData2, setFormData2] = useState({
    id: '',
    title: getInitialValue2("title"),
    description: getInitialValue2("description"),
    message: getInitialValue2("message"),
    date: '',
    type: '',
    deadLineDate: getInitialValue2("deadLineDate"),
    deadLineTime: getInitialValue2("deadLineTime"),
    status: '',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(noteSchema),
    defaultValues: formData,
  });

  const {
    control: control2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    resolver: yupResolver(eventSchema),
    defaultValues: formData2,
  });

  const onSubmit = (data) => {
    const formattedTime = new Date().toLocaleTimeString('pt-BR');
    const formattedDateTime = new Date().toLocaleDateString('pt-BR');
    const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];

    const updatedFormData = {
      ...data,
      date: formattedDateTime,
      time: formattedTime,
      id: parseInt(params.id),
      type: 'nota',
      deadLineDate: null,
      deadLineTime: null,
      status: null,
    };

    storedList[itemIndex] = updatedFormData;
    localStorage.setItem('formDataList', JSON.stringify(storedList));
    router.push(`/`);
  };

  const onSubmit2 = (data) => {
    const formattedTime2 = new Date().toLocaleTimeString('pt-BR');
    const formattedDateTime2 = new Date().toLocaleDateString('pt-BR');
    const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];


    var isodate = data.deadLineDate;
    var adjustedDeadLineDate = isodate.toLocaleDateString('pt-BR');


    const updatedFormData2 = {
      ...data,
      date: formattedDateTime2,
      time: formattedTime2,
      id: parseInt(params.id),
      type: 'compromisso',
      status: "InTime",
      deadLineDate: adjustedDeadLineDate,
    };

    storedList[itemIndex] = updatedFormData2;
    localStorage.setItem('formDataList', JSON.stringify(storedList));
    router.push(`/`);
  };

  return (
    <Main>
      <Header />
      <MobileHeader />
      <Wrapper>
        <Spacing />
        <TitleText>EDITAR NOTA</TitleText>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="title">Titulo:</Label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            {errors.title && <ErrorBox>{errors.title.message}</ErrorBox>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Descrição:</Label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            {errors.description && <ErrorBox>{errors.description.message}</ErrorBox>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Mensagem:</Label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => <Textarea {...field} />}
            />
            {errors.message && <ErrorBox>{errors.message.message}</ErrorBox>}
          </FormGroup>
          <Button title="Editar" variant='secondary' type='submit' />
        </Form>
      </Wrapper>

      <Wrapper>
        <TitleText>EDITAR EVENTO</TitleText>
        <Form onSubmit={handleSubmit2(onSubmit2)}>
          <FormGroup>
            <Label htmlFor="title">Titulo:</Label>
            <Controller
              name="title"
              control={control2}
              render={({ field }) => <Input {...field} />}
            />
            {errors2.title && <ErrorBox>{errors2.title.message}</ErrorBox>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Descrição:</Label>
            <Controller
              name="description"
              control={control2}
              render={({ field }) => <Input {...field} />}
            />
            {errors2.description && <ErrorBox>{errors2.description.message}</ErrorBox>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="deadLineDate">Data do Evento:</Label>
            <Controller
              name="deadLineDate"
              control={control2}
              render={({ field }) => <Input type="date" {...field} />}
            />
            {errors2.deadLineDate && <ErrorBox>{errors2.deadLineDate.message}</ErrorBox>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="deadLineTime">Hora do Evento:</Label>
            <Controller
              name="deadLineTime"
              control={control2}
              render={({ field }) => <Input type="time" step="1" {...field} />}
            />
            {errors2.deadLineTime && <ErrorBox>{errors2.deadLineTime.message}</ErrorBox>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Mensagem:</Label>
            <Controller
              name="message"
              control={control2}
              render={({ field }) => <Textarea {...field} />}
            />
            {errors2.message && <ErrorBox>{errors2.message.message}</ErrorBox>}
          </FormGroup>
          <Button title="Editar" variant='secondary' type='submit' />
        </Form>
      </Wrapper>
      <Footer />
    </Main>
  );
}
