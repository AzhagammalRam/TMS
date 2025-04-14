import React from 'react'
import '../../assets/css/dashboard.css'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function TrainingDirectorateCard() {
    const data = [
        { name: "Data Bank", cost: 10, grad: "#0fcf7b, #0c9f30" },
        { name: "Create & Publish Course (Outside State)", cost: 19, grad: " #f7256e, #cc0c48" },
        { name: "Collate Shortlisted List for Approval", cost: 29, grad: " #f7ea1f, #f87d2c" },
        { name: "HoPF and Outside State Communication", cost: 9, grad: " #5eefea, #0c9f9a" },
        { name: "Approved List internal Communication", cost: 19, grad: " #f280b6, #f72589" },
        { name: "Course Completion Certificate Upload", cost: 29, grad: " #9ad366, #8df82c" },
        { name: "Status Tracking", cost: 29, grad: " #a16ac1, #d191f6" },
      ];
      const n = data.length;

  return (

    <>
        <div className='col-md-12 mt-3 container dashboard-card-body'>
            <div className="d-flex justify-content-center flex-wrap pricing-body col-md-12" style={{ "--n": n }}>
      {data.map((c, i) => (
        <article 
          key={i}
          style={{
            "--i": i,
            "--cost": c.cost,
            "--grad": c.grad,
          }}
        >
          <header>
          <h5 data-name={c.name}>{c.name}</h5>
          </header>
          <section>
            <button><ArrowCircleRightIcon color="secondary" fontSize="large"/></button>
          </section>
        </article>
      ))}
    </div>
        
        </div>
    </>
  )
}

export default TrainingDirectorateCard