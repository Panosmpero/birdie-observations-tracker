import React from 'react'

const OptionsBar = () => {
  return (
    <form className="options-bar">
      <label htmlFor="client">client (testing only)</label>
      <select name="client" id="client">
        <option value="">id1</option>
        <option value="">id2</option>
        <option value="">id3</option>
      </select>
      <label htmlFor="event_type">event type</label>
      <select name="event_type" id="event_type">
        <option value="">event1</option>
        <option value="">event2</option>
        <option value="">event3</option>
      </select>
      <label htmlFor="from_date">From</label>
      <input type="date" name="from_date" id="from_date"/>
      <label htmlFor="to_date">To</label>
      <input type="date" name="to_date" id="to_date"/>
    </form>
  )
}

export default OptionsBar
