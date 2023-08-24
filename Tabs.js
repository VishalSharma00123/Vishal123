import React from 'react';
import './App.css';
import { useState } from 'react';
function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className='container'>
            <div className='bloc-tabs'>
                <div
                    className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(1)}
                >
                    Tab 1
                </div>
                <div
                    className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(2)}
                >
                    Tab 2
                </div>
                <div
                    className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(3)}
                >
                    Tab 3
                </div>
            </div>
            <div className='content-tabs'>
                <div
                    className={toggleState === 1 ? 'content active-content' : 'content'}
                >
                    <h2>Content 1</h2>
                    <hr />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                    </p>
                </div>
                <div
                    className={toggleState === 2 ? 'content active-content' : 'content'}
                >
                    <h2>Content 2</h2>
                    <hr />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                    </p>
                </div>
                <div
                    className={toggleState === 3 ? 'content active-content' : 'content'}
                >
                    <h2>Content 3</h2>
                    <hr />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
                        labore cumque aperiam sequi laudantium odit illum tenetur porro
                        adipisci reprehenderit nihil minus, architecto omnis quasi quam vitae
                        molestiae maiores tempore voluptate excepturi possimus exercitationem?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tabs;
