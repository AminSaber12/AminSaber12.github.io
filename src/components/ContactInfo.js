import React, { Component, useState } from "react";
import {db} from '../firebase';
import AWS from 'aws-sdk'

class ContactInfo extends Component{

    state = {email: "", subject: "", message: "", disabled:false, emailSent:null}

    render(){
        return (
            <main className="relative">
                <div className="pt-10 pl-20 container mx-auto relative">
                    <section className="bg-blue-800 mx-auto w-7/12 rounded-lg shadow-xl p-10">

                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)}>
                    <h1 className="text-white flex"> Contact me by filling out this form or by emailing me at aminsaber0608@gmail.com </h1>
                    <div className="pb-3">
                            <label className="text-white pr-3" htmlFor="Email">Email Address:</label>
                            <input className="rounded flex-initial w-4/12" type="email" aria-describedby="emailHelp" rows="3" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                            <label className="pl-4 text-white pr-3" htmlFor="Subject">Subject:</label>
                            <input className="rounded flex-initial w-4/12" rows="4" value={this.state.subject} onChange={this.onNameChange.bind(this)} />
                        </div>
                        <div className="pb-3">
                            <label className="text-white " htmlFor="message">Message:</label>
                            <textarea className="rounded flex w-full" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                        </div>
                        <button type="submit" disabled={this.state.disabled} className="cursor-pointer whitespace-nowrap inline-block h-10 leading-10 pt-0 pb-0 pr-3 pl-3 bg-gray-800 rounded text-sm font-semibold text-white hover:bg-gray-600">Submit</button>
                    
                        {this.state.emailSent == true && <p className="d-inline success-msg">Email Sent </p>}
                        {this.state.emailSent == false && <p className="d-inline fail-msg">Email Failed to Send </p>}

                    </form>
                        
                    </section>
                </div>
                
            </main>
        );
    }

    onNameChange(event) {
        this.setState({subject: event.target.value})
    }
    
    onEmailChange(event) {
        this.setState({email: event.target.value})
    }
    
    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
    
    handleSubmit = async (e) => {

        e.preventDefault();

        try {
        // Initialize AWS SDK
        AWS.config.update({
            region: process.env.REACT_APP_AWS_REGION,
            accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY,  
            secretAccessKey: process.env.REACT_APP_AWS_SECRET_KEY, 
        });

        const sns = new AWS.SNS();

        // Publish a message to the SNS topic
        await sns.publish({
            TopicArn: process.env.REACT_APP_SNS_TOPIC_ARN,  
            Message: `Email notification from: ${this.state.email} \nMessage: ${this.state.message}`,
            Subject: `${this.state.subject}`,
        }).promise();

        // Handle the success (you can customize this based on your needs)
        console.log('SNS notification sent successfully');
        this.setState({
            disabled: true,
            emailSent: true,
        })

        } catch (error) {
        console.error('Error sending SNS notification:', error);
        this.setState({
            disabled: true,
            emailSent: false,
        })
        }  
    }
}
    

export default ContactInfo;