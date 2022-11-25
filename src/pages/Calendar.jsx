import React, { useContext, useEffect, useRef } from 'react'
import '@fullcalendar/react/dist/vdom'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'
import { SidebarCtx } from '../context/SidebarContext'
import { Box, useTheme } from '@mui/system'
import { Typography } from '@mui/material'
import PageHeader from '../components/PageHeader'

const Calendar = () => {
  const theme = useTheme()
  const { isSidebarOpen } = useContext(SidebarCtx)
  const id = useRef(1)
  const calendarApiRef = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      calendarApiRef.current._calendarApi.view.calendar.updateSize()
    }, 400)
    return () => clearTimeout(timer)
  }, [isSidebarOpen])

  const handleEventAdd = (selectInfo) => {
    const title = prompt('Please enter a new title for your event')
    const calendarApi = selectInfo.view.calendar
    calendarApi.unselect()
    if (title) {
      calendarApi.addEvent({
        id: id.current++,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      })
    }
  }

  const handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove()
    }
  }

  return (
    <Box
      sx={{
        '--fc-list-event-hover-bg-color': `${theme.palette.bg.secondary}`,
        '--fc-page-bg-color': `${theme.palette.bg.secondary}`,
        '--fc-border-color': `${theme.palette.bg.secondary}`,
        '--fc-neutral-bg-color:': 'transparent',
        '--fc-button-text-color': `${theme.palette.text.main}`,
        '--fc-button-bg-color': `${theme.palette.bg.secondary}`,
        '--fc-button-active-bg-color': `${theme.palette.bg.main}`,
        '--fc-button-active-border-color': `${theme.palette.bg.secondary}`,
        '--fc-button-border-color': `${theme.palette.bg.main}`,
        '--fc-button-hover-bg-color': `${theme.palette.bg.main}`,
        '& .fc-header-toolbar': {
          [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            flexDirection: 'column-reverse',
          },
        },
      }}
    >
      <PageHeader title='CALENDAR' subTitle='Full Calendar Interactive Page' />
      <Box
        sx={{
          maxWidth: '800px',
          margin: 'auto',
        }}
      >
        <FullCalendar
          ref={calendarApiRef}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
          }}
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            listPlugin,
            timeGridPlugin,
          ]}
          initialView='dayGridMonth'
          selectable='true'
          eventClick={handleEventClick}
          select={handleEventAdd}
        />
      </Box>
    </Box>
  )
}

export default Calendar
