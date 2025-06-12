import dashboardStyle from "./Dashboard.module.css"


const Dashboard = () => {

      return (
       <div className={dashboardStyle.Box}>
        <div className={`${dashboardStyle.subBox} ${dashboardStyle.subBox1}`}>
          <div className={`${dashboardStyle.subBox_left} ${dashboardStyle.LeftUpper}`}>upper</div>
          <div className={`${dashboardStyle.subBox_left} ${dashboardStyle.LeftLower}`}>
            <div className={dashboardStyle.leftLower_sub}>1</div>
            <div className={dashboardStyle.leftLower_sub}>2</div>
            <div className={dashboardStyle.leftLower_sub}>3</div>
          </div>
        </div>
        <div className={`${dashboardStyle.subBox} ${dashboardStyle.subBox2} `}>
          <div className={dashboardStyle.subboxRight}>1</div>
          <div className={dashboardStyle.subboxRight}>2</div>
          <div className={dashboardStyle.subboxRight}>3</div>
        </div>
       </div>
      )
        
    };

export default Dashboard;

