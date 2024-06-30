"use client";
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
  Wrapper,
  ErrorBox
} from './styles';
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { format, parseISO } from 'date-fns';
import { MobileHeader } from '@/components/MobileHeader';

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
  const {
    control: control1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1, isValid: isValid1 },
    reset: reset1,
  } = useForm({
    resolver: yupResolver(noteSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const {
    control: control2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2, isValid: isValid2 },
    reset: reset2,
  } = useForm({
    resolver: yupResolver(eventSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit1 = (data) => {
    const formattedTime = new Date().toLocaleTimeString('pt-BR');
    const formattedDateTime = new Date().toLocaleDateString('pt-BR');
    const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];

    const verify = () => {
      if (storedList.length > 0) {
        return storedList[storedList.length - 1].id + 1;
      } else {
        return 1;
      }
    };

    const updatedFormData = {
      ...data,
      date: formattedDateTime,
      time: formattedTime,
      id: verify(),
      type: 'nota',
      deadLineDate: null,
      deadLineTime: null,
      status: null,
    };

    const updatedList = [...storedList, updatedFormData];
    localStorage.setItem('formDataList', JSON.stringify(updatedList));

    reset1();
    console.log(updatedList);
    console.log(formattedDateTime);
  };

  const onSubmit2 = (data) => {
    const formattedTime2 = new Date().toLocaleTimeString('pt-BR');
    const formattedDateTime2 = new Date().toLocaleDateString('pt-BR');
    const storedList = JSON.parse(localStorage.getItem('formDataList')) || [];

    const verify2 = () => {
      if (storedList.length > 0) {
        return storedList[storedList.length - 1].id + 1;
      } else {
        return 1;
      }
    };
    

    var isodate = data.deadLineDate;
    var adjustedDeadLineDate = isodate.toLocaleDateString('pt-BR');
    

    const updatedFormData2 = {
      ...data,
      date: formattedDateTime2,
      time: formattedTime2,
      id: verify2(),
      type: 'compromisso',
      status: "InTime",
      deadLineDate: adjustedDeadLineDate,
    };

    const updatedList2 = [...storedList, updatedFormData2];
    localStorage.setItem('formDataList', JSON.stringify(updatedList2));

    reset2();
    console.log(updatedList2);
    console.log(formattedDateTime2);
  };
























  return (
    <Main>
      <Header />
      <MobileHeader />
      <Wrapper>
        <Spacing />
        <TitleText>Criar nota</TitleText>
        <Form onSubmit={handleSubmit1(onSubmit1)}>
          <FormGroup>
            <Label htmlFor="title">Titulo:</Label>
            <Controller
              name="title"
              control={control1}
              defaultValue=""
              render={({ field }) => (
                <Input
                  type="text"
                  id="title"
                  {...field}
                  placeholder="Título"
                />
              )}
            />
            {errors1.title && <ErrorBox>{errors1.title.message}</ErrorBox>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Descrição:</Label>
            <Controller
              name="description"
              control={control1}
              defaultValue=""
              render={({ field }) => (
                <Input
                  type="text"
                  id="description"
                  {...field}
                  placeholder="Descrição"
                />
              )}
            />
            {errors1.description && <ErrorBox>{errors1.description.message}</ErrorBox>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Mensagem:</Label>
            <Controller
              name="message"
              control={control1}
              defaultValue=""
              render={({ field }) => (
                <Textarea
                  id="message"
                  {...field}
                  placeholder="Mensagem"
                />
              )}
            />
            {errors1.message && <ErrorBox>{errors1.message.message}</ErrorBox>}
          </FormGroup>
          <Button title="Criar" variant='secondary' type='submit' disabled={!isValid1} />
        </Form>
      </Wrapper>

      <Wrapper>
        <TitleText>Criar Evento</TitleText>
        <Form onSubmit={handleSubmit2(onSubmit2)}>
          <FormGroup>
            <Label htmlFor="title">Titulo:</Label>
            <Controller
              name="title"
              control={control2}
              defaultValue=""
              render={({ field }) => (
                <Input
                  type="text"
                  id="title"
                  {...field}
                  placeholder="Título"
                />
              )}
            />
            {errors2.title && <ErrorBox>{errors2.title.message}</ErrorBox>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Descrição:</Label>
            <Controller
              name="description"
              control={control2}
              defaultValue=""
              render={({ field }) => (
                <Input
                  type="text"
                  id="description"
                  {...field}
                  placeholder="Descrição"
                />
              )}
            />
            {errors2.description && <ErrorBox>{errors2.description.message}</ErrorBox>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="deadLineDate">Data do Evento:</Label>
            <Controller
              name="deadLineDate"
              control={control2}
              defaultValue=""
              render={({ field }) => (
                <Input
                  type="date"
                  id="date"
                  {...field}
                />
              )}
            />
            {errors2.deadLineDate && <ErrorBox>{errors2.deadLineDate.message}</ErrorBox>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="deadLineTime">Hora do Evento:</Label>
            <Controller
              name="deadLineTime"
              control={control2}
              defaultValue=""
              render={({ field }) => (
                <Input
                  type="time"
                  id="time"
                  {...field}
                  step="1"
                />
              )}
            />
            {errors2.deadLineTime && <ErrorBox>{errors2.deadLineTime.message}</ErrorBox>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Mensagem:</Label>
            <Controller
              name="message"
              control={control2}
              defaultValue=""
              render={({ field }) => (
                <Textarea
                  id="message"
                  {...field}
                  placeholder="Mensagem"
                />
              )}
            />
            {errors2.message && <ErrorBox>{errors2.message.message}</ErrorBox>}
          </FormGroup>
          <Button title="Criar" variant='secondary' type='submit' disabled={!isValid2} />
          
        </Form>
      </Wrapper>
      <Footer></Footer>
    </Main>
  );
}
