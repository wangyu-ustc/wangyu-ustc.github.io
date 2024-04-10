import "./styles.css"
import { ItemList } from './ItemList';
import myPicture from '../assets/about5.jpg';


export function BasicInformation() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
        }}>
            <div>

                <div id="home-wrapper">
                    <div id="home">
                        <header>
                            <img
                                alt="Mylogo"
                                className="logo"
                                src={myPicture}
                                width="150"
                                height="125"
                            />
                            <div className='wrapper'>
                                <div className="greetings">
                                    <h1 className="green"> Yu Wang </h1>
                                    <h4>
                                        <a href='https://yuwang.org/home/CV.pdf'>CV</a>
                                        &nbsp;|&nbsp;
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

            </div>

        </div>

    )
}

