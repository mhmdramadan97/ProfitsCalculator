const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(express.static('public'));
app.use(cors()); // Use the cors middleware

app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// // Calculate endpoint
// app.post('/calculate',async (req, res) => {
//     console.log("req :",req.body);
//     try {
//         const {items} = req.body;
    
        
//         //  const items = JSON.parse(data).items;
          
//           let totalCost = 0;
//           let profitSold = 0;
//           let profitLoss = []; 
//           let plTotal =0;
//           if(items?.length>0){

//               items.forEach((item,index) => {
//                   totalCost += item.cost * item.quantity;
//                   profitSold += (item.price - item.cost) * item.sold;
//                   plTotal += (item.price*item.sold) - (item.cost * item.quantity);
//                   profitLoss = [...profitLoss,
//                     {
//                         name: item.name,
//                         pl: (item.price*item.sold) - (item.cost * item.quantity),
//                         sold:`${item.sold} Out of ${item.quantity}`,
//                         need:`need to Sell ${((item.price*item.sold) - (item.cost * item.quantity))>0?0:(-1*((item.price*item.sold) - (item.cost * item.quantity))/(item.price) )} items to cover loss`
//                     }
//                 ]
//             });
//         }
//           res.json({
//               totalCost,
//               profitSold,
//               profitLoss,
//               plTotal
//           });
  
  
        
//     } catch (error) {
//         console.log("error server :", error);
//         return res.status(500).json({error});
//     }

//     });



// // Calculate endpoint
// app.post('/calculatefile', (req, res) => {
//     console.log("req :",req.body);
//     // const {items} = req.body;
    
//     fs.readFile('items.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading file:', err);
//             return res.status(500).json({ error: 'Internal server error' });
//         }
        
//         const items = JSON.parse(data).items;
        
//         let totalCost = 0;
//         let profitSold = 0;
//         let profitLoss = []; 
//         let plTotal =0;
        
//         items.forEach((item,index) => {
//             totalCost += item.cost * item.quantity;
//             profitSold += (item.price - item.cost) * item.sold;
//             plTotal += (item.price*item.sold) - (item.cost * item.quantity);
//             profitLoss = [...profitLoss,
//                 {
//                     name: item.name,
//                     pl: (item.price*item.sold) - (item.cost * item.quantity),
//                     sold:`${item.sold} Out of ${item.quantity}`,
//                     need:`need to Sell ${((item.price*item.sold) - (item.cost * item.quantity))>0?0:(-1*((item.price*item.sold) - (item.cost * item.quantity))/(item.price) )} items to cover loss`
//                 }
//             ]
//         });
//         res.json({
//             totalCost,
//             profitSold,
//             profitLoss,
//             plTotal
//         });
//     });
// });


app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
