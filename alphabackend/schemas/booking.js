import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    defineField({
      name: 'userName',
      title: 'User Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'string',
    }),
    defineField({
      name: 'reference',
      title: 'Reference',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'boolean',
    }),
  ],
})
