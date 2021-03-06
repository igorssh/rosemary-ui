import React from 'react';
import {DatePicker, Button, MonthPicker, Input, IconInput} from '../../../src';
import DemoWithSnippet from '../../layout/DemoWithSnippet';

export default class DatePickerDemo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            controlledValue: '01.01.2015',
            hi: '22.03.2015',
            datePickerWithChild: '22.03.2015'
        };
    }

    render() {
        return (
            <div>

                <DemoWithSnippet>
                    <div>
                        <span className="date-picker-demo__simple-example-text"> The selected date is:</span>
                        <DatePicker className="btn--inline">
                            <Button className="btn-link btn--inline"/>
                        </DatePicker>
                    </div>
                </DemoWithSnippet>

                <br/>
                <br/>

                <h2>Date picker can be controlled</h2>
                <Input type="text" value={this.state.controlledValue}
                       onChange={(value) => this.setState({controlledValue: value})}/>
                <DemoWithSnippet>
                    <DatePicker value={this.state.controlledValue}
                                format="DD.MM.YYYY"
                                onChange={(value) => this.setState({controlledValue: value})}>
                        <Button className="btn-link"/>
                    </DatePicker>
                </DemoWithSnippet>

                <br/>
                <br/>

                <h2>Date Picker with Input</h2>
                <DatePicker
                    value={this.state.hi}
                    format="DD.MM.YYYY"
                    onChange={(value) => this.setState({
                        hi: value
                    })}
                >
                    <Input type="text" />
                </DatePicker>

                <br/>
                <br/>

                <h2>Date Picker with Input And Icoon</h2>
                <DatePicker
                    value={this.state.datePickerWithChild}
                    format="DD.MM.YYYY"
                    onChange={(value) => this.setState({
                        datePickerWithChild: value
                    })}
                >
                    <IconInput iconClassName="im icon-calendar icon--xs"
                               position="right"
                               readOnly/>
                </DatePicker>

                <br/>
                <br/>

                <h2>Dates can be limited</h2>
                <DemoWithSnippet>
                    <DatePicker format="DD.MM.YYYY"
                                minDate="01.10.2015"
                                maxDate="31.03.2017">
                        <Button className="btn-link"/>
                    </DatePicker>
                </DemoWithSnippet>

                <h2>Month picker:</h2>

                <MonthPicker>
                    <Button className="btn-link"/>
                </MonthPicker>

                <br/>
                <br/>

                <MonthPicker>
                    <IconInput iconClassName="im icon-calendar-from"
                               position="right"
                               readOnly/>
                </MonthPicker>
            </div>
        );
    }
}
