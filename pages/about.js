import {connect} from 'react-redux'
import Nav from './../components/nav'
import {Tambah,Kurang} from '../components/redux/actions'




class About extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
                <Nav/>
                <h1>{this.props.Angka}</h1>
                <button onClick={this.props.Tambah}>Tambah</button>
                <button onClick={this.props.Kurang}>Kurang</button>
            </div>
          );
    }
}


const MapStateToProps=(state)=>{
  return{
     Angka:state.Operasi
  }
}
export default connect(MapStateToProps,{Tambah,Kurang}) (About);