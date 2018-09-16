import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import { cuid } from 'cuid'
import { createEvent, deleteEvent, updateEvent } from '../eventActions'

const mapState = (state) => ({
  events:state.events
})

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
}

class EventDashboard extends Component {

  state= {
      isOpen: false,
      selectedEvent: null
  }

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    })
  }

  handleUpdateEvent = (updatedEvent) => {
    this.props.updateEvent(updatedEvent)
    this.setState({
      isOpen: false,
      selectedEvent: null
    })
  }


  handleCancel = () => {
    this.setState({
      isOpen: false
    })
  }

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid
    newEvent.hostPhotoURL = '/assets/user.png'
    this.props.createEvent(newEvent)
    this.setState({
      isOpen: false
    })
  }

  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId)
  }

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    })
  }

  render() {
    const {selectedEvent} = this.state
    const {events} = this.props
    return (
      <Grid>
        <Grid.Column width = {10}>
            <EventList 
              onEventOpen={this.handleOpenEvent} 
              events={events}
              deleteEvent={this.handleDeleteEvent}
              />
        </Grid.Column>
        <Grid.Column width = {6}>
        <Button onClick={this.handleFormOpen} positive content='Create Event'/>
        {this.state.isOpen &&
        <EventForm 
          selectedEvent={selectedEvent} 
          createEvent={this.handleCreateEvent} 
          handleCancel={this.handleCancel}
          updateEvent = {this.handleUpdateEvent}
          /> 
        }        
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapState, actions)(EventDashboard);