import React, { useEffect } from 'react'
import { useState } from 'react'
import './app.css'

function positionAlign(t){
  let position = ''
  switch(t){
    case 0:
      position = 'left-[288.5px] top-[40px]'
      break
    case 1:
      position = 'left-[292px] top-[41px]'
      break
    case 2:
      position = 'left-[293px] top-[41px]'
      break
    case 3:
      position = 'left-[295px] top-[42px]'
      break
    case 4:
      position = 'left-[295px] top-[42px]'
      break
    case 5:
      position = 'left-[298px] top-[43px]'
      break
    case 6:
      position = 'left-[300px] top-[43px]'
      break
    case 7:
      position = 'left-[305px] top-[44px]'
      break
    case 8:
      position = 'left-[307px] top-[44px]'
      break
    case 9:
      position = 'left-[307px] top-[45px]'
      break
    case 10:
      position = 'left-[307px] top-[45px]'
      break
    case 11:
      position = 'left-[307px] top-[47px]'
      break
    case 12:
      position = 'left-[307px] top-[49px]'
      break
    case 13:
      position = 'left-[307px] top-[49px]'
      break
    case 14:
      position = 'left-[307px] top-[52px]'
      break
    case 15:
      position = 'left-[307px] top-[56px]'
      break
    case 16:
      position = 'left-[307px] top-[58px]'
      break
    case 17:
      position = 'left-[307px] top-[63px]'
      break
    case 18:
      position = 'left-[307px] top-[65px]'
      break
    case 19:
      position = 'left-[307px] top-[70px]'
      break
    case 20:
      position = 'left-[305px] top-[72px]'
      break
    case 21:
      position = 'left-[298px] top-[75px]'
      break
    case 22:
      position = 'left-[298px] top-[78px]'
      break
    case 23:
      position = 'left-[298px] top-[78px]'
      break
    case 24:
      position = 'left-[294px] top-[78px]'
      break
    case 25:
      position = 'left-[288px] top-[80px]'
      break
    case 26:
      position = 'left-[288px] top-[80px]'
      break
    case 27:
      position = 'left-[288px] top-[80px]'
      break
    case 28:
      position = 'left-[281px] top-[80px]'
      break
    case 29:
      position = 'left-[281px] top-[80px]'
      break
    case 30:
      position = 'left-[278px] top-[80px]'
      break
    case 31:
      position = 'left-[278px] top-[80px]'
      break
    case 32:
      position = 'left-[272px] top-[80px]'
      break
    case 33:
      position = 'left-[270px] top-[80px]'
      break
    case 34:
      position = 'left-[265px] top-[80px]'
      break
    case 35:
      position = 'left-[265px] top-[80px]'
      break
    case 36:
      position = 'left-[261px] top-[80px]'
      break
    case 37:
      position = 'left-[258px] top-[78px]'
      break
    case 38:
      position = 'left-[258px] top-[75px]'
      break
    case 39:
      position = 'left-[258px] top-[72px]'
      break
    case 40:
      position = 'left-[258px] top-[70px]'
      break
    case 41:
      position = 'left-[258px] top-[70px]'
      break
    case 42:
      position = 'left-[258px] top-[65px]'
      break
    case 43:
      position = 'left-[258px] top-[63px]'
      break
    case 44:
      position = 'left-[258px] top-[61px]'
      break
    case 45:
      position = 'left-[258px] top-[61px]'
      break
    case 46:
      position = 'left-[258px] top-[58px]'
      break
    case 47:
      position = 'left-[258px] top-[55px]'
      break
    case 48:
      position = 'left-[258px] top-[54px]'
      break
    case 49:
      position = 'left-[258px] top-[52px]'
      break
    case 50:
      position = 'left-[258px] top-[48px]'
      break
    case 51:
      position = 'left-[258px] top-[46px]'
      break
    case 52:
      position = 'left-[258px] top-[42px]'
      break
    case 53:
      position = 'left-[258px] top-[38px]'
      break
    case 54:
      position = 'left-[261px] top-[36px]'
      break
    case 55:
      position = 'left-[261px] top-[32px]'
      break
    case 56:
      position = 'left-[265px] top-[32px]'
      break
    case 57:
      position = 'left-[269px] top-[32px]'
      break
    case 58:
      position = 'left-[272px] top-[32px]'
      break
    case 59:
      position = 'left-[274px] top-[30px]'
      break
  }
  return position
}

function Hour({hour}){

  let position = ''
  switch(hour){
    case 12:
      position = 'top-[100px] left-[275px]'
      break
    case 1:
      position = 'top-[100px] left-[297px]'
      break
    case 2:
      position = 'top-[109px] left-[307px]'
      break
    case 3:
      position = 'top-[119px] left-[307px]'
      break
    case 4:
      position = 'top-[138px] left-[307px]'
      break
    case 5:
      position = 'top-[136px] left-[297px]'
      break
    case 6:
      position = 'top-[138px] left-[288px]'
      break
    case 7:
      position = 'top-[136px] right-[297px]'
      break
    case 8:
      position = 'top-[130px] right-[307px]'
      break
    case 9:
      position = 'top-[119px] right-[307px]'
      break
    case 10:
      position = 'top-[103px] right-[300px]'
      break
    case 11:
      position = 'top-[100px] right-[288px]'
      break
  }

  const rotate = hour * 30
  const classes = `absolute text-[40px] font-black origin-bottom ${position} rotate-[${rotate}deg]`

  console.log(classes)

  return (
    <div className={classes}>
      <div>{hour}</div>
      <div>{hour}</div>
      <div>{hour}</div>
    </div>
  )
}

function Minute({minute}){
  const position = positionAlign(minute)

  const rotate = minute * 6
  const classes = `absolute text-[40px] origin-bottom ${position} rotate-[${rotate}deg] font-medium`

  console.log(classes)
  return (
    <div className={classes}>
      <div>{minute}</div>
      <div>{minute}</div>
      <div>{minute}</div>
      <div>{minute}</div>
    </div>
  )
}

function Second({second}){
    const position = positionAlign(second)

  
    const rotate = second * 6
    const classes = `absolute text-[40px] origin-bottom ${position} rotate-[${rotate}deg] font-thin`
  
    console.log(classes)
    return (
      <div className={classes}>
        <div>{second}</div>
        <div>{second}</div>
        <div>{second}</div>
        <div>{second}</div>
      </div>
    )
  }

export default function App() {

  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  const Date = new window.Date()

  const tick = () => {
    if(second === 59){
      setSecond(0)
      if(minute === 59){
        setMinute(0)
        if(hour === 12) setHour(1)
        else setHour(hour => hour + 1)
      }
      else setMinute(minute => minute + 1)
    }
    else setSecond(second => second + 1)
  }

  useEffect(() => {
    if(Date.getHours() > 12) setHour(Date.getHours() - 12)
    else setHour(Date.getHours())
    setMinute(Date.getMinutes())
    setSecond(Date.getSeconds())

    const interval = setInterval(() => {
      tick()
    }, 1000)
    return () => clearInterval(interval)
  }, [second])


  const classes = `border border-black h-96 rotate-[${minute * 6}deg]`

  return (
    <div className='h-screen flex justify-center items-center'>
      <section className='w-[600px] h-[600px] border border-black rounded-full relative flex justify-center items-center'>
        <Hour hour={hour}/>
        <Minute minute={minute}/>
        <Second second={second}/>
      </section>
    </div>
  )
}
