import Nav from '../components/Nav.js'
import studentstyles from '../styles/student.module.css'
import Footer from '../components/Footer.js'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';

const school = () => {
    return (
        <>
            <Nav />
            <div className={studentstyles.banner}>
                <div className={studentstyles.container}>
                    <h1>ข้อมูลนักเรียน</h1>
                </div>
            </div>
            <section>
                <div className={studentstyles.sec1}>
                <div className={studentstyles.sec1table}>
  <Table striped bordered hover responsive="sm" >
    <thead>
      <tr>
        <th>ระดับชั้น</th>
        <th>จำนวนนักเรียนชาย</th>
        <th>จำนวนนักเรียนหญิง</th>
        <th>รวม</th>
        <th>จำนวนห้องเรียน</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>มัธยมศึกษาปีที่ 1</td>
        <td>24</td>
        <td>15</td>
        <td>39</td>
        <td>2</td>
      </tr>
      <tr>
        <td>มัธยมศึกษาปีที่ 2</td>
        <td>22</td>
        <td>22</td>
        <td>44</td>
        <td>2</td>
      </tr>
      <tr>
        <td>มัธยมศึกษาปีที่ 3</td>
        <td>16</td>
        <td>27</td>
        <td>43</td>
        <td>2</td>
      </tr>
      <tr>
        <td>รวมมัธยมศึกษาตอนต้น&nbsp;&nbsp;&nbsp;</td>
        <td>62</td>
        <td>64</td>
        <td>126</td>
        <td>6</td>
      </tr>
      </tbody>
  </Table>
  <Table striped bordered hover responsive="sm" >
    <thead>
      <tr>
        <th>ระดับชั้น</th>
        <th>จำนวนนักเรียนชาย</th>
        <th>จำนวนนักเรียนหญิง</th>
        <th>รวม</th>
        <th>จำนวนห้องเรียน</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>มัธยมศึกษาปีที่ 4</td>
        <td >22</td>
        <td>16</td>
        <td>38</td>
        <td>2</td>
      </tr>
      <tr>
        <td>มัธยมศึกษาปีที่ 5</td>
        <td>20</td>
        <td>25</td>
        <td>45</td>
        <td>2</td>
      </tr>
      <tr>
        <td>มัธยมศึกษาปีที่ 6</td>
        <td>6</td>
        <td>12</td>
        <td>18</td>
        <td>2</td>
      </tr>
      <tr>
        <td>รวมมัธยมศึกษาตอนปลาย</td>
        <td>48</td>
        <td>53</td>
        <td>101</td>
        <td>6</td>
      </tr>
      </tbody>
  </Table>
  

</div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default school

