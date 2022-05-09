
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeatPicker from "react-seat-picker";

class App extends Component {
  state = {
    loading: false,
    selected:[]
  };

  addSeatCallback = ({ row, number, id }, addCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        // const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id);
        this.setState({ selected: [...this.state.selected, number] })
        this.setState({ loading: false });
        console.log(this.state.selected);
      }
    );
  };


  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        // const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
        removeCb(row, number);
        this.setState({selected: this.state.selected.filter(item => item !==number)});
      console.log(this.state.selected);
        this.setState({ loading: false });
      }
    );
  };

  render() {
    const rows = [
      [
        { id: 1, number: "a1" ,isReserved:true},
        { id: 2, number: "a2" },
        null,
        { id: 3, number: "b1" },
        { id: 4, number: "b2" }
      ],
      [
        { id: 5, number: "a3" },
        { id: 6, number: "a4" },
        null,
        { id: 7, number: "b3" },
        { id: 8, number: "b4" }
      ],
      [
        { id: 9, number: "a5" },
        { id: 10, number: "a6" },
        null,
        { id: 11, number: "b5" },
        { id: 12, number: "b6" }
      ],
      [
        { id: 13, number: "a7" },
        { id: 14, number: "a8" },
        null,
        { id: 15, number: "b7" },
        { id: 16, number: "b8" }
      ],
      [
        { id: 17, number: "a9" },
        { id: 18, number: "a10" },
        null,
        { id: 19, number: "b9" },
        { id: 20, number: "b10" }
      ],
      [
        { id: 21, number: "a11" },
        { id: 22, number: "a12" },
        null,
        { id: 23, number: "b11" },
        { id: 24, number: "b12" }
      ],
      [
        { id: 25, number: "a13" },
        { id: 26, number: "a14" },
        { id: 27, number: "a15" },
        { id: 28, number: "b13" },
        { id: 29, number: "b14" }
      ]
    ];
    const { loading } = this.state;
    return (
      <div>
        <h1>Seat Picker</h1>
        <div style={{ marginTop: "20px" }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallback}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={20}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
          />
        </div>
      </div>
    );
  }
}
export default App;























// import React from "react";
// import ReactDOM from "react-dom";
// import { Row } from "reactstrap";

// // import "./styles.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.SeatElement = React.createRef();
//   }
//   handleClick = () => {
//     this.SeatElement.current.changeName();
//   };
//   render() {
//     return (
//       <div>


// {/*         
//         <Cell ref={this.SeatElement} />
//         <Cell ref={this.SeatElement} />
//         <Cell ref={this.SeatElement} /> */}


//  <div className="grid-container">
// {/* 
//   <Cell class="a1 filled"></Cell>
//   <Cell class="a2 filled"/>
//   <Cell className="a3"/> */}
//    <div className="a1"><Cell/> </div>
//    <div className="a2"><Cell/> </div>
//    <div className="a3"><Cell/> </div>

//   <div className="a4"><Cell/> </div>
//   <div className="a5"><Cell/> </div>
//   <div className="a6"><Cell/> </div>
//   <div className="a7"><Cell/> </div>
//   <div className="a8"><Cell/> </div>
//   <div className="a9"><Cell/> </div>
//   <div className="a10"><Cell/> </div>
//   <div className="a11"><Cell/> </div>
//   <div className="a12"><Cell/> </div>
//   <div className="a13"><Cell/> </div>
//   <div className="a14"><Cell/> </div>
//   <div className="a15"><Cell/> </div>
//   <div className="b1"><Cell/> </div>
//   <div className="b2"><Cell/> </div>
//   <div className="b3"><Cell/> </div>
//   <div className="b4"><Cell/> </div>
//   <div className="b5"><Cell/> </div>
//   <div className="b6"><Cell/> </div>
//   <div className="b7"><Cell/> </div>
//   <div className="b8"><Cell/> </div>
//   <div className="b9"><Cell/> </div>
//   <div className="b10"><Cell/> </div>
//   <div className="b11"><Cell/> </div>
//   <div className="b12"><Cell/> </div>
//   <div className="b13"><Cell/> </div>
//   <div className="b14"><Cell/> </div>

  
// </div>

        
//       </div>
//     );
//   }
// }

// class Cell extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bgColor: "#1FB0AC"
//     }
//   }


//   boxClick = (e) => {
//     if(this.state.bgColor=="#B01F1F") return;
//     if(this.state.bgColor=="#1FB0AC")
//     {this.setState({
//       bgColor: "#223167"
//     })}
//     else{
//       this.setState({
//         bgColor: "#1FB0AC"
//       })
//     }
//   }

//   render() {
//     return (
  

// <div style={{backgroundColor: this.state.bgColor,height:50,width:50,borderRadius:10}}
//            onClick={this.boxClick}></div>
     
//     );
//   }
// }

// export default App;