import styled from 'styled-components'
import './base.css';
import { ItemList } from './itemslist';



const HomeStyledDiv = styled.div`
    #root {
      width: 100%;
    }

    :root {
      --vt-c-white: #ffffff;
      --vt-c-white-soft: #f8f8f8;
      --vt-c-white-mute: #f2f2f2;

      --vt-c-black: #181818;
      --vt-c-black-soft: #222222;
      --vt-c-black-mute: #282828;

      --vt-c-indigo: #2c3e50;

      --vt-c-divider-light-1: rgba(60, 60, 60, 0.29);
      --vt-c-divider-light-2: rgba(60, 60, 60, 0.12);
      --vt-c-divider-dark-1: rgba(84, 84, 84, 0.65);
      --vt-c-divider-dark-2: rgba(84, 84, 84, 0.48);

      --vt-c-text-light-1: var(--vt-c-indigo);
      --vt-c-text-light-2: rgba(60, 60, 60, 0.66);
      --vt-c-text-dark-1: var(--vt-c-white);
      --vt-c-text-dark-2: rgba(235, 235, 235, 0.64);
    }

    /* semantic color variables for this project */
    :root {
      --color-background: var(--vt-c-white);
      --color-background-soft: var(--vt-c-white-soft);
      --color-background-mute: var(--vt-c-white-mute);

      --color-border: var(--vt-c-divider-light-2);
      --color-border-hover: var(--vt-c-divider-light-1);

      --color-heading: var(--vt-c-text-light-1);
      --color-text: var(--vt-c-text-light-1);

      --section-gap: 160px;
    }

    @media (prefers-color-scheme: dark) {
      :root {
        --color-background: var(--vt-c-black);
        --color-background-soft: var(--vt-c-black-soft);
        --color-background-mute: var(--vt-c-black-mute);

        --color-border: var(--vt-c-divider-dark-2);
        --color-border-hover: var(--vt-c-divider-dark-1);

        --color-heading: var(--vt-c-text-dark-1);
        --color-text: var(--vt-c-text-dark-2);
      }
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
      position: relative;
      font-weight: normal;
    }

    body {
      position: relative;
      min-height: 100vh;
      height: 100vh;
      width: 100%;
      min-width: 100%;
      max-height: 100vh;
      color: var(--color-text);
      background: var(--color-background);
      transition: color 0.5s, background-color 0.5s;
      line-height: 1.6;
      font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      font-size: 15px;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }


    #home-wrapper {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    #home {
      /* max-width: 1500px; */
      width: 100%;
      margin: 0 auto;
      padding: 2rem;
      font-weight: normal;
    }

    header {
      line-height: 1.5;
    }

    .logo {
      display: block;
      margin: 0 auto 2rem;
    }

    a,
    .green {
      text-decoration: none;
      color: rgb(0, 6, 189);
      transition: 0.4s;
    }

    @media (hover: hover) {
      a:hover {
        background-color: hsla(160, 100%, 37%, 0.2);
      }
    }

    @media (min-width: 1024px) {
      body {
        display: flex;
        place-items: center;
      }

      #home {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 2rem;
      }

      header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
      }

      header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
      }

      .logo {
        margin: 0 2rem 0 0;
      }

      h1 {
        font-weight: 500;
        font-size: 2.6rem;
        top: -10px;
      }
    }
`



export function BasicInformation() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
        }}>
            {/* <div style={{
                width: '60%'
            }}>
                I'm Yu Wang from University of Science and Technology of China.
            </div> */}

            {/* <style style={{ height: '100%' }}/> */}
            <HomeStyledDiv>

                <div id="home-wrapper">
                    <div id="home">
                        <header>
                            <img
                                alt="My picture"
                                className="logo"
                                src={require("./assets/about4.jpg")}
                                width="150"
                                height="125"
                            />
                            <div className='wrapper'>
                                <div className="greetings">
                                    <h1 className="green"> Yu Wang </h1>
                                    <h3>
                                        A senior student from University of Science and Technology of China.
                                    </h3>
                                    <h4>
                                        <a href='https://yuwang.site/CV.pdf'>CV</a>
                                        &nbsp;&nbsp;
                                        <a href='https://scholar.google.com/citations?hl=en&user=n1pDIggAAAAJ'>Google Scholar</a>
                                    </h4>
                                </div>
                            </div>
                        </header>

                        <main>
                            <ItemList />
                        </main>
                    </div>
                </div>

            </HomeStyledDiv>

        </div>

    )
}