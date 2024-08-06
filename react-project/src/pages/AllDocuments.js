import React from 'react'
import useFetch from '../hooks/useFetch'


// export default function AllDocuments() {
//     return (
//       <div>
//         Hi Taltalitooo
//       </div>
//     )
//   }

export default function AllDocuments() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/documents')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data.data)

  return (
    <div>
      {data.data.map(document => (
        console.log(document.attributes),
        <div key={document.id}>
          <h2>{document.attributes.title}</h2>

          <p>{document.attributes.content}</p>
        </div>
      ))}
    </div>
  )
}
