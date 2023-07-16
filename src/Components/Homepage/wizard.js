import React from "react";

const Wizard = () => {
    return (
        <>
            <section className="flow">
                <div className="main-body">
                    <div className="flow-header">
                        <h1>Rent Flow</h1>
                    </div>
                    <div className= "container flow-container">
                        <div className="step">
                            <span className="circle">
                                <span className="small-circle"></span>
                            </span>
                            <span className="caption">Choose Locations</span>
                            <div className="flow-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis aliquid et vel illum debitis iusto consequuntur nesciunt eius esse accusantium. Nostrum ea quibusdam ipsam possimus.</div>
                        </div>
                        <div className="step">
                            <span className="circle">
                                <span className="small-circle"></span>
                            </span>
                            <span className="caption">Pick Dates</span>
                            <div className="flow-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis aliquid et vel illum debitis iusto consequuntur nesciunt eius esse accusantium. Nostrum ea quibusdam ipsam possimus.</div>
                        </div>
                        <div className="step">
                            <span className="circle">
                                <span className="small-circle"></span>
                            </span>
                            <span className="caption">Find Out Car</span>
                            <div className="flow-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis aliquid et vel illum debitis iusto consequuntur nesciunt eius esse accusantium. Nostrum ea quibusdam ipsam possimus.</div>
                        </div>
                        <div className="step">
                            <span className="circle">
                                <span className="small-circle"></span>
                            </span>
                            <span className="caption">Payment</span>
                            <div className="flow-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis aliquid et vel illum debitis iusto consequuntur nesciunt eius esse accusantium. Nostrum ea quibusdam ipsam possimus.</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wizard;