import React, { Component } from 'react'

class App extends Component {
  render () {
    return <div>
      <h1>RESIZE THE WINDOW</h1>
      <div className='grid'>
        <div className='one'>Box 1</div>
        <div className='two'>Box 2</div>
        <div className='three'>Box 3</div>
        <div className='four'>Box 4</div>
        <div className='five'>Box 5</div>
        <div className='six'>Box 6</div>
      </div>
      <div className='grid1'>
        <header>Header</header>
        <article>
          <h1>Article</h1>
          <p>content for my article</p>
        </article>
        <aside>Aside</aside>
        <footer>Footer</footer>
      </div>
    </div>
  }
}

export default App
