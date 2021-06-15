function Persons({data}) {
    return(
    <ul>
    {data.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
    </ul>
  )
}

export default Persons;