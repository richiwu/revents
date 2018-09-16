import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventDetailedChat from './EventDetailedChat'  
import EventDetailedHeader from './EventDetailedHeader'  
import EventDetailedInfo from './EventDetailedInfo'  
import EventDetailedSidebar from './EventDetailedSidebar'  

const EventDetailedPage = () => {
  return (
    <div>
    <h1>hello</h1>
    <Grid>
        <Grid.Column width={10}>
          <EventDetailedHeader />
          <EventDetailedInfo />
          <EventDetailedChat />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventDetailedSidebar />
        </Grid.Column>
    </Grid>
    </div>
  )
}

export default EventDetailedPage
