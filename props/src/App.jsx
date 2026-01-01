import Card from './components/card'
import './App.css'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: 45,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: 55,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: 42,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "3 weeks ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 75,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 80,
    location: "Remote (India)"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHour: 60,
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "4 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 70,
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    payPerHour: 50,
    location: "Remote (India)"
  },
  {
    brandLogo: "https://logo.clearbit.com/stripe.com",
    companyName: "Stripe",
    datePosted: "2 months ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: 48,
    location: "Remote (India)"
  },
  {
    brandLogo: "https://logo.clearbit.com/linkedin.com",
    companyName: "LinkedIn",
    datePosted: "12 days ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 78,
    location: "Bengaluru, India"
  }
];



  return (
    <div className="app-container">
     {jobOpenings.map((item) =>{
      return <Card companyName={item.companyName} description={item.description} payPerHour={item.payPerHour} location = {item.location} />

     })}
    </div>
  )
}

export default App