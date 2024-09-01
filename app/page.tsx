import Home from './components/HomePage'

export default function HomePage() {
  return (
    <section className='py-24'>
      <div className='container'>
        <Home />
      </div>
    </section>
  )
}


// pnpm dlx json-server -w data/images.json -p 3500