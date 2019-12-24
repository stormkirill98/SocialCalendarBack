import React from "react";
import "../css/Month.css"
import Day from "./Day";

export default class Month extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            countDays: monthDays(props.year, props.month),
            firstDayOfWeek: firstWeekDay(props.year, props.month),
            month: props.month,
            year: props.year,
            events: {}
        };

        this.updateMonthAndYear = this.updateMonthAndYear.bind(this);
        this.updateEvents = this.updateEvents.bind(this);
        this.getEvents = this.getEvents.bind(this);
    }

    prevMonth() {
        let curMonth = this.state.month, curYear = this.state.year;

        if (curMonth === 1) {
            curYear--;
            curMonth = 12;
            this.updateMonthAndYear(curMonth, curYear);
        } else {
            curMonth--;
            this.updateMonthAndYear(curMonth, curYear);
        }
    }

    nextMonth() {
        let curMonth = this.state.month, curYear = this.state.year;

        if (curMonth === 12) {
            curYear++;
            curMonth = 1;
            this.updateMonthAndYear(curMonth, curYear);
        } else {
            curMonth++;
            this.updateMonthAndYear(curMonth, curYear);
        }
    }

    prevYear() {
        this.updateMonthAndYear(this.state.month, this.state.year - 1);
    }

    nextYear() {
        this.updateMonthAndYear(this.state.month, this.state.year + 1);
    }

    updateMonthAndYear(month, year) {
        this.setState({
            countDays: monthDays(year, month),
            firstDayOfWeek: firstWeekDay(year, month),
            month: month,
            year: year,
            events: this.state.events
        });
        this.getEvents(month, year);
    }

    updateEvents(events) {
        this.setState({
            countDays: this.state.countDays,
            firstDayOfWeek: this.state.firstDayOfWeek,
            month: this.state.month,
            year: this.state.year,
            events: events
        });
    }

    componentDidMount() {
        this.getEvents(this.state.month, this.state.year)
    }

    getEvents(month, year) {
        fetch(`/events?month=${month}&year=${year}`).then((response) => {
            if (response.ok) {
                response.json().then((data) => {
                    this.updateEvents(data)
                })
            } else {
                console.log(response.statusText);
            }
        });
    }

    render() {
        console.log("render month");

        const days = [], firstDay = this.state.firstDayOfWeek, countDays = this.state.countDays,
            countDaysPrevMonth = monthDays(this.state.year, this.state.month - 1);
        const months = ["", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

        //названия дней недели
        for (let i = 0; i < 7; i++) {
            days.push(<div className="day-name" key={100 + i}/>);
        }

        //предыдущий месяц
        for (let i = 0; i < firstDay; i++) {
            days.push(<Day key={-i} hidden={true} day={countDaysPrevMonth - firstDay + 1 + i}
                           events={null} month={this.state.month - 1}
                           year={this.state.month === 1 ? this.state.year - 1 : this.state.year}/>)
        }

        //этот месяц
        for (let i = 0; i < countDays; i++) {
            days.push(<Day key={i + 1} hidden={false} day={i + 1}
                           events={this.state.events[i + 1]}
                           updateEventListData={this.props.updateEventListData} month={this.state.month}
                           year={this.state.year}/>)
        }

        //след месяц
        for (let i = 0; i < 42 - countDays - firstDay; i++) {
            days.push(<Day key={countDays + i} hidden={true} day={i + 1} events={null} month={this.state.month}
                           year={this.state.month === 12 ? this.state.year + 1 : this.state.year}/>)
        }

        return (
            <div className="flex-col">
                <div className="wrap-year-month">
                    <div className="month-year">
                        <button className="arrow-button" onClick={() => this.prevMonth()}>{'<'}</button>
                        {months[this.state.month]}
                        <button className="arrow-button" onClick={() => this.nextMonth()}>{'>'}</button>
                    </div>

                    <div className="month-year">
                        <button className="arrow-button" onClick={() => this.prevYear()}>{'<'}</button>
                        {this.state.year}
                        <button className="arrow-button" onClick={() => this.nextYear()}>{'>'}</button>
                    </div>
                </div>
                <div className="month-grid">
                    {days}
                </div>
            </div>
        );
    }
}

function monthDays(y, m) {   // full year and month in range 1-12
    let leap = 0;
    if (m === 2) {
        if (y % 4 === 0) leap = 1;
        if (y % 100 === 0) leap = 0;
        if (y % 400 === 0) leap = 1;
    }
    return [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m] + leap;
}

function firstWeekDay(y, m) {
    return new Date(y, m - 1, 0).getDay();
}