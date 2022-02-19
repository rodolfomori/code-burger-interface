import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import CloudUploadIcon from '@mui/icons-material/CloudUpload'

import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, LabelUpload } from './styles'

function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { register, handleSubmit, control } = useForm()

  const onSubmit = data => console.log(data)

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      console.log(data)
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label>Nome</Label>
        <Input type="text" {...register('name')} />

        <Label>Preço</Label>
        <Input type="number" {...register('price')} />

        <LabelUpload>
          {fileName || (
            <>
              <CloudUploadIcon />
              Carregue a imagem do produto
            </>
          )}

          <input
            type="file"
            id="image-input"
            accept="image/png, image/jpeg"
            {...register('file')}
            onChange={value => {
              setFileName(value.target.files[0]?.name)
            }}
          />
        </LabelUpload>

        <Controller
          name="category_id"
          control={control}
          render={({ field }) => {
            return (
              <ReactSelect
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder="Categorias"
              />
            )
          }}
        ></Controller>

        <ButtonStyles>Adicionar produto</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewProduct

/*
Input

Não controlados => Eles não são controlados por NINGUÉM, se viram sozinhos.
Ex: Um input que ele próprio guarda o seu valor. Auto-suficiente!

Controlados => Eles são controlados por algum outro componente ou não são auto-suficientes.
Ex: Um input que não guarda o valor dele próprio, ele necessita guardar em uma variável.





*/
