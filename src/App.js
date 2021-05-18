import React,{ useState } from 'react'

function App() {
  const [tab,setTab] = useState('tommy')

  const tommyTab = () => {
    setTab('tommy')
  }

  const bigTab = () => {
    setTab('big')
  }

  const cukerTab = () => {
    setTab('cuker')
  }


  return (
    <div>
      <div className='title'>
        <h2>Experience</h2>
        <h2 className='underline'></h2>
      </div>
      <section>
        <navbar>
          <button onClick={()=>tommyTab()}>TOMMY</button>
          <button onClick={()=>bigTab()}>BIGDROP</button>
          <button onClick={()=>cukerTab()}>CUKER</button>
        </navbar>
        <article>
          {(tab==='tommy') && 
            <>
              <h2>Full Stack Web Developer</h2>
              <h3>TOMMY</h3>
              <p>December 2015 - Present</p>
              <p>Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.</p>
              <p>Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.</p>
              <p>Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.</p>
            </>
          }
          {(tab==='big') && 
            <>
              <h2>Front-End Engineer</h2>
              <h3>BIGDROP</h3>
              <p>May 2015 - December 2015</p>
              <p>Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.</p>
              <p>Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester</p>
              <p>Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1</p>
            </>
          }
          {(tab==='cuker') && 
            <>
              <h2>Engineering Intern</h2>
              <h3>CUKER</h3>
              <p>May 2014 - September 2015</p>
              <p>I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.</p>
              <p>YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.</p>
              <p>Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.</p>
            </>
          }
        </article>
      </section>
    </div>
  )

}

export default App;
