import React from 'react';
import 'emoji-mart/css/emoji-mart.css'
import { Picker, Emoji } from 'emoji-mart'

export default class FormLogin extends React.Component {

    render() {
        return(
            <div>
                <Picker set='emojione' />
                <Emoji emoji={{ id: 'santa', skin: 3 }} size={16} />
            </div>
        )
    }
}