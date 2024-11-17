import React from 'react'
import Button from './components/Button/Button'
import CardButton from './components/CardButton/CardButton'
import JournalItem from './components/JournalItem/JournalItem'

const App = () => {
 
  const data = [
    {
      title:'Подготовка к обновлению курсов',
      text:'Сегодня провёл весь день за...',
      data:'31.12.2025'
    },
    {
      title:'Поход в годы',
      text:'Думал, что очень много време...',
      data:'21.06.2025',
    },
    {
      title:'Первая заметка',
      text:'Создал первую заметку, чтобы ...',
      data:'11.04.2025'
    }
  ] 
 
  return (
    <>
    <CardButton>
    <img src="/plus.svg" alt="" />
    Новое воспоминание
    </CardButton>

<CardButton className={"card-journal"}>
  <JournalItem title={data[0].title} text={[0].text} date={[0].data}/>
</CardButton>

<CardButton className={"card-journal"}>
  <JournalItem title={data[1].title} text={[1].text} date={[1].data}/>
</CardButton>

<CardButton className={"card-journal"}>
  <JournalItem title={data[2].title} text={[2].text} date={[2].data}/>
</CardButton>

    <Button/>
    
    
    
    
    </>
  )
}

export default App