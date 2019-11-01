import React, { Component } from 'react';
import { Input, Select, Icon } from 'antd';
import './app.css'
import 'antd/dist/antd.css';
const { TextArea } = Input;

class App extends Component {

  state = {
 from: '',
 to: '',
 subject: '',
 message: '',
 status: null,
}

onSendMail = (e) => {
    e.preventDefault()

    fetch(`https://sendemailserver.herokuapp.com/${this.state.from}/${this.state.to}/${this.state.subject}/${this.state.message}`)
      .then( result => this.setState({ status: result.status }))
      .catch(err => console.log(err))
  }

  render(){

if(this.state.status === 404){
return  <div className='container'>
<div className='container text-center col-md-4 shadow a2'>
        <h1 className='a1'>SendMail</h1>

        <div style={{ marginBottom: 10 }}>
   <Input addonBefore="From" placeholder="Sender's Email address" onChange = { e => this.setState({ from: e.target.value })} value={this.state.from} />
         </div>

         <div style={{ marginBottom: 10 }}>
    <Input addonBefore="To" placeholder="Recipient's Email address" onChange = { e => this.setState({ to: e.target.value })} value={this.state.to}/>
          </div>

         <div style={{ marginBottom: 10 }}>
     <Input addonBefore="Subject" placeholder="Enter subject" onChange = { e => this.setState({ subject: e.target.value })} value={this.state.subject}/>
           </div>

<TextArea rows={4} style={{ marginBottom: 10 }}  placeholder="Type your message here ..." onChange = { e => this.setState({ message: e.target.value })} value={this.state.message}/>

<button className='btn btn-primary btn-block btn-sm' onClick={this.onSendMail}>Send now</button>
          <div className='a5'><Icon className='a3' type="close-circle" theme="twoTone" twoToneColor="red" /> Message is not sent</div>
</div>
        </div>
}
if(this.state.status === 400){
  return <div className='container'>
<div className='container text-center col-md-4 shadow a2'>
         <h1 className='a1'>SendMail</h1>

         <div style={{ marginBottom: 10 }}>
    <Input addonBefore="From" placeholder="Sender's Email address"  onChange = { e => this.setState({ from: e.target.value })} value={this.state.from}/>
          </div>

          <div style={{ marginBottom: 10 }}>
     <Input addonBefore="To" placeholder="Recipient's Email address"  onChange = { e => this.setState({ to: e.target.value })} value={this.state.to}/>
           </div>

          <div style={{ marginBottom: 10 }}>
      <Input addonBefore="Subject" placeholder="Enter subject" onChange = { e => this.setState({ subject: e.target.value })} value={this.state.subject} />
            </div>

<TextArea rows={4} style={{ marginBottom: 10 }}  placeholder="Type your message here ..." onChange = { e => this.setState({ message: e.target.value })} value={this.state.message}/>

<button className='btn btn-primary btn-block btn-sm' onClick={this.onSendMail}>Send now</button>
</div>
<div className='a5'><Icon className='a3' type="close-circle" theme="twoTone" twoToneColor="#52c41a" /> Message is not sent</div>
         </div>


}
if(this.state.status === 200){
return  <div className='container'>
 <div className='container text-center col-md-4 shadow a2'>
           <h1 className='a1'>SendMail</h1>
    <div className='container text-center a4'>    <Icon type="check-circle" className='a3' theme="twoTone" twoToneColor="#52c41a" /> Message sent</div>
 </div>
 </div>
}
  return <div className='container'>
<div className='container text-center col-md-4 shadow a2'>
           <h1 className='a1'>SendMail</h1>

           <div style={{ marginBottom: 10 }}>
      <Input addonBefore="From" placeholder="Sender's Email address" onChange = { e => this.setState({ from: e.target.value })} value={this.state.from}/>
            </div>

            <div style={{ marginBottom: 10 }}>
       <Input addonBefore="To" placeholder="Recipient's Email address" onChange = { e => this.setState({ to: e.target.value })} value={this.state.to}/>
             </div>

            <div style={{ marginBottom: 10 }}>
        <Input addonBefore="Subject" placeholder="Enter subject" onChange = { e => this.setState({ subject: e.target.value })} value={this.state.subject} />
              </div>

<TextArea rows={4} style={{ marginBottom: 10 }}  placeholder="Type your message here ..." onChange = { e => this.setState({ message: e.target.value })} value={this.state.message}/>

<button className='btn btn-primary btn-block btn-sm' onClick={this.onSendMail}>Send now</button>
</div>
           </div>


  }
}
export default App;
