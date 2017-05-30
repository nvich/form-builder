export const example = {
  name: "EXAMPLE",
  fields: [
    {
      _type: 'group',
      id: "1",
      columns: {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12
      },
      title: '',
      children: [
        {
          _type: 'field',
          id: "10",
          columns: {
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6
          },
          label: 'Field 1',
          description: '',
          component: 'text',
          placeholder: 'plcaholder 1',
          validation: [{
            rule: 'required',
            message: 'Campo obrigatório'
          },
            {
              rule: 'alphanumeric',
              message: 'Apenas letras e números'
            }],
          key: 'field1',
          options: []
        },
        {
          _type: 'field',
          id: "10",
          columns: {
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6
          },
          label: 'Field 2',
          description: '',
          component: 'select',
          placeholder: 'placeholder 2',
          validation: [{
            rule: 'required',
            message: 'Campo obrigatório'
          }],
          key: 'field2',
          options: [
            { label: 'Selecione', value: '' },
            { label: 'item1', value: 'Item 1' },
            { label: 'item2', value: 'Item 2' }
          ]
        },
        {
          _type: 'field',
          id: 11,
          columns: {
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6
          },
          label: 'Field 3',
          component: 'text',
          placeholder: 'placeholder 3',
          validation: [{
            rule: 'required',
            message: 'Campo obrigatório'
          }],
          key: 'field3'
        },
        {
          _type: 'field',
          id: 11,
          columns: {
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6
          },
          label: 'Field 4',
          component: 'text',
          placeholder: 'placeholder 4',
          validation: [{
            rule: 'required',
            message: 'Campo obrigatório'
          }],
          key: 'field4',
          addon: {
            before: 'R$'
          },
          mask: 'money'
        },
        {
          _type: 'group',
          id: "12",
          columns: {
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6
          },
          title: '',
          children: [
            {
              _type: 'field',
              id: 123,
              columns: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12
              },
              label: 'Field 5',
              component: 'datetime',
              validation: [{
                rule: 'required',
                message: 'Campo obrigatório'
              }, {
                rule: 'datetime',
                message: 'Data e hora inválida'
              }],
              key: 'field5',
            },
            {
              _type: 'field',
              id: "124",
              columns: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12
              },
              label: 'Field 6',
              component: 'datetime',
              validation: [{
                rule: 'required',
                message: 'Campo obrigatório'
              }, {
                rule: 'datetime',
                message: 'Data e hora inválida'
              }],
              key: 'field6'
            }
          ]
        },
        {
          _type: 'group',
          id: "2",
          columns: {
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6
          },
          title: '',
          children: [
            {
              _type: 'field',
              id: "14",
              columns: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6
              },
              label: 'Field 7',
              component: 'checkbox',
              validation: [{
                rule: 'oneRequired',
                message: 'Ao menos 1',
                fields: [
                  'field8'
                ]
              }],
              key: 'field7'
            },
            {
              _type: 'field',
              id: "14",
              columns: {
                xs: 12,
                sm: 12,
                md: 6,
                lg: 6
              },
              label: 'Field 8',
              component: 'checkbox',
              validation: [{
                rule: 'oneRequired',
                message: 'Ao menos 1',
                fields: [
                  'field7'
                ]
              }],
              key: 'fiedl8'
            },
            {
              _type: 'field',
              id: "14",
              columns: {
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12
              },
              label: 'Field 9',
              component: 'text',
              validation: [{
                rule: 'required',
                message: 'Campo obrigatório'
              },
                {
                  rule: 'number',
                  message: 'Número inválido'
                }],
              key: 'field9'
            }
          ]
        }
      ]
    }
  ]
};
