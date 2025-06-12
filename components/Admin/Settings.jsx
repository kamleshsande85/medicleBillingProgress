import React from 'react'

function Settings() {
 
   return (
     <div style={styles.container}>
       <img 
         src="https://cdn-icons-png.flaticon.com/512/907/907214.png" 
         alt="Under Construction" 
         style={styles.image} 
       />
       <h2 style={styles.heading}>Setting Page Under Construction</h2>
       <p style={styles.text}>We are working hard to bring this page to life. Stay tuned!</p>
       <button style={styles.button} onClick={() => window.history.back()}>
         Go Back
       </button>
     </div>
   );
 }
 
 const styles = {
   container: {
     textAlign: "center",
     padding: "50px",
     fontFamily: "Arial, sans-serif",
      height:"83.8vh"
   },
   image: {
     width: "150px",
     marginBottom: "20px",
   },
   heading: {
     fontSize: "24px",
     color: "#333",
   },
   text: {
     fontSize: "16px",
     color: "#666",
   },
   button: {
     marginTop: "20px",
     padding: "10px 20px",
     fontSize: "16px",
     color: "#fff",
     backgroundColor: "#007BFF",
     border: "none",
     borderRadius: "5px",
     cursor: "pointer",
   }
 };
 
 
 
export default Settings