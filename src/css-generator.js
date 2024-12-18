export function generateCSS(data) {
  const { backgroundColor, textColor, accentColor } = data;

  return `
  body {
      font-family: 'Inter', sans-serif;
       background-color: ${backgroundColor || '#f4f4f4'};
      color: ${textColor || '#333'};
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .card-container {
       width: 100%;
      max-width: 900px;
      padding: 20px;
        
    }
    
   .digital-card {
       display: flex;
        flex-direction: row;
       background-color: white;
       border-radius: 10px;
         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
         
       
    }
    .left-panel {
     padding: 30px;
      flex: 1;
         display: flex;
        flex-direction: column;
         justify-content: flex-start;
          align-items: flex-start;
    }
      .right-panel{
          padding: 30px;
           flex: 1;
           display: flex;
         flex-direction: column;
        justify-content: flex-start;
         align-items: flex-start;
           background-color: #f0f0f0;
    }

    .profile-section{
        margin-bottom: 20px;
           display: flex;
      flex-direction: column;
         justify-content: flex-start;
        align-items: flex-start;

     }

    .profile-image{
       width: 150px;
        height: 150px;
      border-radius: 50%;
       margin-bottom: 20px;
        object-fit: cover;
       
    }
   
   .profile-placeholder {
     width: 150px;
    height: 150px;
   border-radius: 50%;
   background-color: #ccc;
   display: flex;
  align-items: center;
   justify-content: center;
   font-size: 4rem;
  color: #fff;
  margin-bottom: 20px;
   }
       h1{
           margin: 0;
           font-weight: 700;
           margin-bottom: 5px;
         font-size: 1.8em;
       }

    p{
      font-size: 1.1em;
         margin: 0;
         line-height: 1.4;
    }

    .contact-section {
         display: flex;
          flex-direction: column;
           margin-bottom: 20px;
    }
  .contact-item{
     display: flex;
        align-items: center;
         text-decoration: none;
      color: ${textColor || '#333'};
     padding: 5px 0;
   }
    .contact-item i{
        margin-right: 10px;
    }
    .section{
     margin-bottom: 25px;
      
     }

      h2{
      font-size: 1.4em;
        font-weight: 700;
         margin-bottom: 10px;
       
     }

      .social-links{
           display: flex;
            flex-direction: row;
            justify-content: flex-start;
             margin-bottom: 10px;

        }
  .social-link{
       font-size: 1.5rem;
       color:  ${textColor || '#333'};
       margin-right: 15px;
      
      text-decoration: none;
    transition: all 0.3s;
  }
   .social-link:hover{
          transform: scale(1.1);
    }
      .social-link i{
          color: var(--brand-color);
      }
      
    .qr-code img{
      width: 180px;
        height: 180px;
     }
      .actions {
        display: flex;
        flex-direction: column;
          width: 100%;
     }

     .action-button {
           padding: 10px 20px;
          margin-bottom: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
             text-decoration: none;
            display: inline-flex;
            align-items: center;
           justify-content: center;
       }
    .action-button.primary {
        background-color: ${accentColor || '#007BFF'};
        color: white;
    }

     .action-button.secondary {
       background-color: #fff;
      border: 1px solid #ddd;
           color:  ${textColor || '#333'};

    }
      .action-button i {
          margin-right: 5px;
      }
      
         @media (max-width: 768px) {
          .digital-card {
            flex-direction: column;
          }

           .left-panel{
               width: 100%;
               padding: 15px;
          }
               .right-panel{
                width: 100%;
             padding: 15px;
           }

       .profile-image{
            width: 120px;
          height: 120px;

      }
             .profile-placeholder {
             width: 120px;
            height: 120px;
            font-size: 3rem;
            }
            .qr-code img {
              width: 150px;
              height: 150px;
            }

       }

  `
  }