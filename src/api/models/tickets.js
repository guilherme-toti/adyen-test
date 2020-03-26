export const Tickets = ({ currency, data }) => {
  let minPrice, deepLink, flyDuration, distance;

  const selectTicket = ticket => {
    minPrice = ticket.price
    deepLink = ticket.deep_link
    flyDuration = ticket.fly_duration
    distance = Math.round(ticket.distance)
  }

  data.forEach(ticket => {
    if (!minPrice) {
      selectTicket(ticket)
    } else if (ticket.price < minPrice) {
      selectTicket(ticket)
    }
  })

  return {
    currency,
    minPrice,
    flyDuration,
    distance,
    deepLink,
  }
}
