import React from 'react';
import Highlighter from 'react-highlight-words'

import './index.less'

export default class FormLogin extends React.Component {

    render() {
        return(
            <div>
                <Highlighter
                    highlightClassName="high-class"
                    highlightStyle={{border: '1px solid red'}}
                    unhighlightClassName="no-high-class"
                    searchWords={["poem", "life", "deceived", '欺骗']}
                    autoEscape={true}
                    textToHighlight="The poem expound an energetic and optimistic life's attitude: If be life you were deceived, don't be melancholy, not have to mourn sorrowfully.假如省会欺骗了你"
                />,
            </div>
        )
    }
}