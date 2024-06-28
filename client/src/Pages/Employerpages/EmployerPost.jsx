// import React from "react";
// import { FaUserEdit } from "react-icons/fa";
// import { RiPagesLine } from "react-icons/ri";


// const EPost = () => {

//   // /api/vacancy POST

//   /**
//    * 
//     title

//     description

//     gender man woman

//     salary

//     location
    
//     jobtype

//     deadline
//    */
//   return (
//     <div className="p-4">
//       <div className="min-h-10 p-6">
//         <div className="flex items-center gap-2 text-blue-700 font-semibold">
//           <RiPagesLine  />
//           <h1> Elan məlumatları</h1>
//         </div>
//       </div>
//       <div className="w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-6">
//       <div className="px-6">
//           <h5 className="py-3">Elan başığı</h5>
//           <input
//             className="border p-2 rounded-sm w-full"
//             type="text"
//             placeholder="Elan başığı adını daxil edin"
//             name="title"
//           />
//         </div>
//         <div className="px-6">
//           <h5 className="py-3">Son müraciət tarixi</h5>
//           <input name="deadline" className="border p-2 rounded-sm w-full" type="date" />
//         </div>
//         <div className="px-6">
//           <h5 className="py-3">Məkan</h5>
//           <input
//             className="border p-2 rounded-sm w-full"
//             type="text"
//             placeholder="Şəhər adını daxil edin"
//             name="location"
//           />
//         </div>
//         <div className="px-6">
//           <h5 className="py-3">Təklif olunan maaş</h5>
//           <input
//             className="border p-2 rounded-sm w-full"
//             type="number"
//             placeholder="Maaş miqdarı - AZN ilə"
//             name="salary"
//           />
//         </div>
//         <div className="px-6">
//           <h5 className="py-3">Iş haqqında bilgi</h5>
//           <textarea
          
//             className="border h-28 p-2 rounded-sm w-full resize-none"
//             type="text"
//             placeholder="Tələblər və öhtəliklər barədə bura yazın.."
//             name=" description"
//           />
//         </div>
       
//       </div>
//       <div className="w-full flex justify-end items-center p-6 h-36">
//         <button className="w-36 h-12 rounded-md text-white bg-gray-800">
//           Yadda saxla
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EPost;


import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { RiPagesLine } from 'react-icons/ri';

const EPost = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      gender: '',
      salary: '',
      location: '',
      jobtype: '',
      deadline: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Elan başlığı gerekli'),
      description: Yup.string().required('Iş haqqında bilgi gerekli'),
      salary: Yup.number().required('Təklif olunan maaş gerekli').positive('Maaş pozitif olmalıdır'),
      location: Yup.string().required('Məkan gerekli'),
      deadline: Yup.date().required('Son müraciət tarixi gerekli'),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await fetch('/api/vacancy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          const errorData = await response.json();
          setErrors(errorData.errors);
        } else {
          // Başarı durumunda yapılacak işlemler
          alert('Form başarıyla gönderildi');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="p-4">
      <div className="min-h-10 p-6">
        <div className="flex items-center gap-2 text-blue-700 font-semibold">
          <RiPagesLine />
          <h1>Elan məlumatları</h1>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} className="w-full grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-6">
        <div className="px-6">
          <h5 className="py-3">Elan başığı</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="text"
            placeholder="Elan başığı adını daxil edin"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error">{formik.errors.title}</div>
          ) : null}
        </div>
        <div className="px-6">
          <h5 className="py-3">Son müraciət tarixi</h5>
          <input
            name="deadline"
            className="border p-2 rounded-sm w-full"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.deadline}
          />
          {formik.touched.deadline && formik.errors.deadline ? (
            <div className="error">{formik.errors.deadline}</div>
          ) : null}
        </div>
        <div className="px-6">
          <h5 className="py-3">Məkan</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="text"
            placeholder="Şəhər adını daxil edin"
            name="location"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.location}
          />
          {formik.touched.location && formik.errors.location ? (
            <div className="error">{formik.errors.location}</div>
          ) : null}
        </div>
        <div className="px-6">
          <h5 className="py-3">Təklif olunan maaş</h5>
          <input
            className="border p-2 rounded-sm w-full"
            type="number"
            placeholder="Maaş miqdarı - AZN ilə"
            name="salary"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.salary}
          />
          {formik.touched.salary && formik.errors.salary ? (
            <div className="error">{formik.errors.salary}</div>
          ) : null}
        </div>
        <div className="px-6">
          <h5 className="py-3">Iş haqqında bilgi</h5>
          <textarea
            className="border h-28 p-2 rounded-sm w-full resize-none"
            placeholder="Tələblər və öhtəliklər barədə bura yazın.."
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>
        <div className="w-full flex justify-end items-center p-6 h-36">
          <button
            type="submit"
            className="w-36 h-12 rounded-md text-white bg-gray-800"
            disabled={formik.isSubmitting}
          >
            Yadda saxla
          </button>
        </div>
      </form>
    </div>
  );
};

export default EPost;

