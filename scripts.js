// Updated scripts.js — static inputs, no backend fetch
// (Replaces dynamic backend calls with embedded static data
//  and shows only processed data for selected PO line items)

// -------------------- STATIC INPUTS (replaceable) --------------------
const poData = [
  {'PURCHASE_ORDER_NUMBER': '140660', 'LINE_NUMBER': '1', 'DELIVERY_DATE': '2025-05-19', 'CUSTOMER_NAME': 'Herker Industries, Inc.', 'ITEM_DESCRIPTION': 'Steel 1215 Round .632" Cold Finished', 'Grade': '1215', 'Shape': 'RD', 'Diameter': '0.632', 'Thickness': '', 'Width': '', 'Length': '144', 'Finish_Type': null, 'Ground': 'No', 'Feature': [], 'PO_Item_Hash': 'd912ce7313b80d5bc194cc041d713c07'},
  {'PURCHASE_ORDER_NUMBER': '35032-IL', 'LINE_NUMBER': '1', 'DELIVERY_DATE': '2025-03-18', 'CUSTOMER_NAME': 'KKSP Precision Machining LLC', 'ITEM_DESCRIPTION': "STEEL 1.0000 HEX-SHARP 12L14 12'", 'Grade': '12L14', 'Shape': 'HEX', 'Diameter': '1.0', 'Thickness': '', 'Width': '', 'Length': '144', 'Finish_Type': null, 'Ground': 'No', 'Feature': [], 'PO_Item_Hash': '34f456427ead63d4f9de948614003517'},
  {'PURCHASE_ORDER_NUMBER': '35032-IL', 'LINE_NUMBER': '2', 'DELIVERY_DATE': '2025-03-18', 'CUSTOMER_NAME': 'KKSP Precision Machining LLC', 'ITEM_DESCRIPTION': "STEEL 1.1875 ROUND 12L14 12' BAR", 'Grade': '12L14', 'Shape': 'RD', 'Diameter': '1.1875', 'Thickness': '', 'Width': '', 'Length': '144', 'Finish_Type': null, 'Ground': 'No', 'Feature': [], 'PO_Item_Hash': '72df9ba7fec8f410b8ca985997f22b24'}
];

// The processed/recommendations data (your "processed items" array)
const processedDataAll = [
   {
      "PURCHASE_ORDER_NUMBER":"140660",
      "LINE_NUMBER":"1",
      "DELIVERY_DATE":"2025-05-19",
      "CUSTOMER_NAME":"Herker Industries, Inc.",
      "Grade":"1215",
      "Shape":"RD",
      "Finish_Type":"None",
      "Ground":"No",
      "PO_Item_Hash":"d912ce7313b80d5bc194cc041d713c07",
      "diameterMaximum":0.632,
      "diameterMinimum":0.628,
      "lengthMaximum":146.0,
      "lengthMinimum":144.0,
      "PO_DESCRIPTION":"Steel 1215 Round .632\" Cold Finished",
      "Special_Feature_Item":[

      ],
      "CUSTOMER_NUMBER":10832,
      "Selected_items":[
         {
            "item":129247,
            "overview":"ASTM,1215,Q003,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,0.63050,0.63150,,,,,144.00000,146.00000,2.67,,,Ground,Polished,Chamfered 1 End,Cold Drawn,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"1215",
            "specCode":"Q003",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":0.6315,
            "diameterMinimum":0.6305,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"1215 General Inventory -  Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"1215,RD  ,0.6315/0.6305 ,144,146",
            "Features":[
               "ground",
               "polished",
               "chamfered one end",
               "cold drawn"
            ],
            "Item_Availability":"Herker Industries, Inc. has no open future orders for item 129247. The only record (2016-02-01) shows zero on-hand and no scheduled supply. Consequently, the item will not be available around the 2025-05-19 delivery date.",
            "rank":2,
            "rank_justification":"Also meets the PO grade, shape, and cold finished requirement with a tight .6305–0.6315 range, but includes extra processes (ground, polished, chamfered end) not specified in the PO description."
         },
         {
            "item":113805,
            "overview":"ASTM,1215,Q003,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,0.63000,0.63200,,,144.00000,144.00000,2.67,,,Cold Drawn",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"1215",
            "specCode":"Q003",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":0.632,
            "diameterMinimum":0.63,
            "lengthMaximum":144.0,
            "lengthMinimum":144.0,
            "specDesc":"1215 General Inventory -  Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"1215,RD  ,0.632/0.63 ,144,144",
            "Features":[
               "cold drawn"
            ],
            "Item_Availability":"Herker Industries, Inc. has no open demand orders for item 113805 in the provided data, and there are no recorded supplies or on-hand quantities around the PO delivery date of 2025-05-19.",
            "rank":1,
            "rank_justification":"Matches the PO steel grade (1215), round shape, .632\" size range (0.630–0.632), and cold finished (cold drawn) requirement without any additional, unspecified features."
         }
      ]
   },
   {
      "PURCHASE_ORDER_NUMBER":"35032-IL",
      "LINE_NUMBER":"1",
      "DELIVERY_DATE":"2025-03-18",
      "CUSTOMER_NAME":"KKSP Precision Machining LLC",
      "Grade":"12L14",
      "Shape":"HEX",
      "Finish_Type":"None",
      "Ground":"No",
      "PO_Item_Hash":"34f456427ead63d4f9de948614003517",
      "diameterMaximum":1.0,
      "diameterMinimum":0.997,
      "lengthMaximum":146.0,
      "lengthMinimum":144.0,
      "PO_DESCRIPTION":"STEEL 1.0000 HEX-SHARP 12L14 12'",
      "Special_Feature_Item":[

      ],
      "CUSTOMER_NUMBER":10499,
      "Selected_items":[
         {
            "item":129065,
            "overview":"ASTM,12L14,Q003,CF Bar,HEX,,,,,,,,,,,,0,,,,,,,,,,,,,,,,,0.99700,1.00000,,,,,144.00000,146.00000,2.95,,,Cold Drawn,Eddy Current,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,146",
            "Features":[
               "cold drawn",
               "eddy current tested"
            ],
            "Item_Availability":"There are no demand entries for item 129065 by KKSP Precision Machining LLC (or any other customer) beyond 2016, so there is no open order for that item. No supply records are scheduled in the months surrounding the 2025-03-18 delivery date. The on-hand quantity is zero.",
            "rank":8,
            "rank_justification":"Length tolerance includes PO (144–146), cold drawn + eddy current features (extra test) but no chamfers or roll marks."
         },
         {
            "item":129421,
            "overview":"ASTM,12L14,Q003,CF Bar,HEX,,,,,,,,,,,,,,,,,,,,,BAR MARK TO CS PRECISION SPECIFICATIONS TWO SIDES,,,,,,,,0.99700,1.00000,,,,,144.00000,146.00000,2.95,,,Cold Drawn,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,146",
            "Features":[
               "cold drawn"
            ],
            "Item_Availability":"KKSP Precision Machining LLC has no recorded open orders for item 129421; the only entry is a historical on-hand balance of 10,290 units as of 2016-02-01. There are no scheduled supply or demand events in the months surrounding the 2025-03-18 delivery date. Availability for that timeframe cannot be confirmed from the provided data.",
            "rank":7,
            "rank_justification":"Length tolerance includes PO (144–146), only cold drawn, no chamfers or extra markings/tests; minor bar-marking noted in overview but not captured in features."
         },
         {
            "item":125193,
            "overview":"ASTM,12L14,Q003,CF Bar,HEX,,,,,,,,,,,,,,,,,,,BARMARK BRENNAN LOGO 1 SIDE W/#152 HEAT CODE,,BAR MARK #152,,,,,,,,0.99700,1.00000,,,,,144.00000,146.00000,2.95,,,Cold Drawn,Roll Mark,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,146",
            "Features":[
               "cold drawn",
               "roll marked"
            ],
            "Item_Availability":"KKSP Precision Machining LLC has no open or future demand orders for item 125193. The only inventory record dates to 2016 and shows a zero on-hand balance. No supplies are scheduled within two months of the 2025-03-18 delivery date.",
            "rank":14,
            "rank_justification":"Length tolerance includes PO (144–146), cold drawn + roll marked; extra roll marking deviates from plain spec."
         },
         {
            "item":126166,
            "overview":"ASTM,12L14,Q003,CF Bar,HEX,,,,,,,,,,,,,,,,,,,BAR MARK ONE SIDE NO. 188 \" AIRWAY\",,,,,,,,,,0.99700,1.00000,,,,,144.00000,146.00000,2.95,,,Chamfered Both,Cold Drawn,Eddy Current,Roll Mark,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,146",
            "Features":[
               "chamfered both ends",
               "cold drawn",
               "roll marked",
               "eddy current tested"
            ],
            "Item_Availability":"No demand records for KKSP Precision Machining LLC on item 126166 appear after 2025-03-18, so there is no open order for that customer. Likewise, there are no supply entries scheduled in the two-month window around the PO delivery date, leaving the on-hand quantity unchanged.",
            "rank":15,
            "rank_justification":"Length tolerance includes PO (144–146), multiple extra features (chamfered both ends, roll mark, eddy current) – largest deviation from basic hex-sharp spec."
         },
         {
            "item":116392,
            "overview":"ASTM,12L14,Q003,CF Bar,HEX,,,,,,,,,,,,,,,,,,,BAR MARKED SURFACE TO CHARLESTON METAL PRODUCPTS SPEC WITH EATON USING ROLL #127 & #133,,,,,,,,,,0.99700,1.00000,,,144.00000,146.00000,2.95,,,Cold Drawn,Roll Mark",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,146",
            "Features":[
               "cold drawn",
               "roll marked"
            ],
            "Item_Availability":"KKSP Precision Machining LLC has no other open demand for item 116392 beyond the 2025-03-18 delivery. There are no incoming supplies for that item within two months of that date, and on-hand levels do not cover the planned shipment. You will need to arrange additional supply to meet the PO.",
            "rank":12,
            "rank_justification":"Length tolerance includes PO (144–146), cold drawn + roll marked; extra marking deviates from plain hex-sharp requirement."
         },
         {
            "item":117133,
            "overview":"ASTM,12L14,Q003,CF Bar,HEX,,,,,,,,,,,,,,,,,,,SCREW MACHINE SPECIFICATIONS WITH \"NRP JONES\" MARK USING ROLL # 140.,,,,,,,,,,0.99700,1.00000,,,,,144.00000,146.00000,2.95,,,Cold Drawn,Roll Mark,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,146",
            "Features":[
               "cold drawn",
               "roll marked"
            ],
            "Item_Availability":"KKSP Precision Machining LLC has no open orders for item 117133. The only record is a zero balance on hand as of 2016-02-01 with no subsequent supply or demand entries. Therefore, the item is not available around the March–May 2025 period.",
            "rank":13,
            "rank_justification":"Length tolerance includes PO (144–146), cold drawn + roll marked; similar to item 116392 but higher item number."
         },
         {
            "item":110048,
            "overview":"ASTM,12L14,Q003,CF Bar,HEX,,,,,,,,,,,,0,,,,,,,,,,,,,,,,,0.99700,1.00000,,,144.00000,144.00000,2.95,,,Cold Drawn",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":144.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,144",
            "Features":[
               "cold drawn"
            ],
            "Item_Availability":"There are no future demand entries for item 110048 under KKSP Precision Machining LLC, so no open orders exist. Likewise, there are no supply records around the 2025-03-18 delivery date, so availability cannot be confirmed.",
            "rank":1,
            "rank_justification":"Exact length match (144–144), only required feature (cold drawn), no chamfers or extra markings/tests, diameter tolerance matches PO, best overall fit."
         },
         {
            "item":109549,
            "overview":"ASTM,12L14,Q003,CF Bar,HEX,,,,,,,,,,,,,,,,,,,,,,,,,,,,,0.99700,1.00000,,,,,144.00000,146.00000,2.95,,,Chamfered 1 End,Cold Drawn,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,146",
            "Features":[
               "chamfered one end",
               "cold drawn"
            ],
            "Item_Availability":"KKSP Precision Machining LLC has no open demand orders for item 109549 in the provided data. Current on-hand inventory is 125,990 units and two receipts of 46,869 and 29,154 units on 2025-04-29 will raise the balance above 200,000 units. This indicates ample availability around the 2025-03-18 PO delivery date and the following two months.",
            "rank":11,
            "rank_justification":"Length tolerance includes PO (144–146), chamfered one end + cold drawn; partial chamfer deviates from 'sharp' spec."
         },
         {
            "item":109550,
            "overview":"ASTM,12L14,Q003,CF Bar,HEX,,,,,,,,,,,,,,,,,,,,,,,,,,,,,0.99700,1.00000,,,144.00000,146.00000,2.95,,,Cold Drawn",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"Y",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,146",
            "Features":[
               "cold drawn"
            ],
            "Item_Availability":"There are no future demand records for KKSP Precision Machining LLC for item 109550, nor any supply entries beyond a single zero balance on 2016-02-01. With a current on-hand of zero, the item will not be available around the 2025-03-18 delivery date.",
            "rank":5,
            "rank_justification":"Length tolerance includes PO (144–146), only cold drawn, no chamfers or extra markings/tests; slight length range looseness vs. exact."
         },
         {
            "item":109551,
            "overview":"ASTM,12L14,Q003,CF Bar,HEX,,,,,,,,,,,,,,,,,,,,,,,,,,,,,0.99700,1.00000,,,,,144.00000,146.00000,2.95,,,Chamfered Both,Cold Drawn",
            "MaterialStatus":"Active",
            "Stocked":"Y",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"Y",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,146",
            "Features":[
               "chamfered both ends",
               "cold drawn"
            ],
            "Item_Availability":"KKSP Precision Machining LLC does not appear as a demander of item 109551 in the provided schedule, so there is no open order for them. The first replenishment after their 2025-03-18 PO date is on 2025-04-29 for 52,982 units, raising on-hand to 199,067. Subsequent supplies in May, August and September 2025 further bolster availability.",
            "rank":9,
            "rank_justification":"Length tolerance includes PO (144–146), chamfered both ends (edges not sharp) plus cold drawn; deviates on edge sharpness."
         },
         {
            "item":109423,
            "overview":"ASTM,12L14,Q003,CF Bar,HEX,,,,,,,,,,,,,,,,,,,SCREW MACHINE SPECIFICATIONS WITH \"NRP JONES\" MARK USING ROLL # 140.,,,,,,,,,,0.99700,1.00000,,,,,144.00000,144.00000,2.95,,,Chamfered 1 End,Cold Drawn,Eddy Current,Roll Mark,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":144.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,144",
            "Features":[
               "chamfered one end",
               "cold drawn",
               "roll marked",
               "eddy current tested"
            ],
            "Item_Availability":"KKSP Precision Machining LLC has no open or upcoming demand orders for item 109423. The only future demands are 10,000 units on 2025-05-05 and 3,745 units on 2025-05-14 by Screw Machine Products Company, driving projected on-hand to –13,745. With no supply transactions and a zero opening balance, the item is unavailable around the March–May 2025 period.",
            "rank":4,
            "rank_justification":"Exact length (144–144) and material/shape match, but has multiple extra features (chamfered one end, roll mark, eddy current) that deviate from 'HEX-SHARP' no-extra spec."
         },
         {
            "item":109424,
            "overview":"ASTM,12L14,Q003,CF Bar,HEX,,,,,,,,,,,,,,,,,,,,,,,,,,,,,0.99700,1.00000,,,144.00000,144.00000,2.95,,,Cold Drawn,Eddy Current",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":144.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,144",
            "Features":[
               "cold drawn",
               "eddy current tested"
            ],
            "Item_Availability":"No demand entries for item 109424 by KKSP Precision Machining LLC occur on or after 2025-03-18, so there are no open orders for that customer. The table also shows no supply transactions for this item in the two months before or after the PO delivery date, leaving availability around that period unconfirmed.",
            "rank":3,
            "rank_justification":"Exact length match (144–144) and shape/material match, features include cold drawn + eddy current (extra test) but no chamfers or roll marks."
         },
         {
            "item":126561,
            "overview":"ASTM,12L14,Q015,CF Bar,HEX,,,,,,,,,,,,,,,,,,,,,,,,,,,,,0.99700,1.00000,,,,,144.00000,146.00000,2.95,,,Chamfered Both,Cold Drawn,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q015",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 to Parker Fluid Connector FC-M12L14 Rev. A - >0.625\" to 1.500\" - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,146",
            "Features":[
               "chamfered both ends",
               "cold drawn"
            ],
            "Item_Availability":"I don’t see any actual rows of the Tabular Data provided—could you please share the date-quantity-vendor/customer-on-hand entries so I can check for open orders and availability?",
            "rank":10,
            "rank_justification":"Length tolerance includes PO (144–146), chamfered both ends + cold drawn; similar to item 109551 but not stocked."
         },
         {
            "item":116831,
            "overview":"ASTM,12L14,Q018,CF Bar,HEX,,,,,,,,,,,,0,,,,,,,,,,,,,,,,,0.99700,1.00000,,,144.00000,144.00000,2.95,,,Cold Drawn",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q018",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":144.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 Economy Grade - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,144",
            "Features":[
               "cold drawn"
            ],
            "Item_Availability":"There are no demand entries for item 116831 by KKSP Precision Machining LLC with delivery dates after 2025-03-18, so no open customer order exists. Inventory records for the two months around that date show no incoming supply events for this item and only the carried‐over on-hand balance. As a result, availability cannot be confirmed within that window.",
            "rank":2,
            "rank_justification":"Exact length match (144–144), only required feature (cold drawn), no chamfers or extra markings/tests, diameter tolerance matches PO; second best pure match."
         },
         {
            "item":117916,
            "overview":"ASTM,12L14,Q030,CF Bar,HEX,,,,,,,,,,,,,,,,,,,,,EAF,,,,,,,,0.99700,1.00000,,,144.00000,146.00000,2.95,,,Cold Drawn",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q030",
            "Shape":"HEX",
            "itemType":"CF Bar",
            "diameterMaximum":1.0,
            "diameterMinimum":0.997,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory - Melted in USA Only - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,HEX  ,1/0.997 ,144,146",
            "Features":[
               "cold drawn"
            ],
            "Item_Availability":"No records for item 117916 are provided, so it’s not possible to identify any open demand orders for KKSP Precision Machining LLC or to assess its availability around the 2025-03-18 delivery date.",
            "rank":6,
            "rank_justification":"Length tolerance includes PO (144–146), only cold drawn, no chamfers or extra markings/tests; same as item 109550 but higher item number."
         }
      ]
   },
   {
      "PURCHASE_ORDER_NUMBER":"35032-IL",
      "LINE_NUMBER":"2",
      "DELIVERY_DATE":"2025-03-18",
      "CUSTOMER_NAME":"KKSP Precision Machining LLC",
      "Grade":"12L14",
      "Shape":"RD",
      "Finish_Type":"None",
      "Ground":"No",
      "PO_Item_Hash":"72df9ba7fec8f410b8ca985997f22b24",
      "diameterMaximum":1.1875,
      "diameterMinimum":1.1835,
      "lengthMaximum":146.0,
      "lengthMinimum":144.0,
      "PO_DESCRIPTION":"STEEL 1.1875 ROUND 12L14 12' BAR",
      "Special_Feature_Item":[

      ],
      "CUSTOMER_NUMBER":10499,
      "Selected_items":[
         {
            "item":129159,
            "overview":"ASTM,12L14,Q003,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1.18550,1.18750,,,,,144.00000,146.00000,2.67,,,Cold Drawn,Straighten,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1855,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,RD  ,1.1875/1.1855 ,144,146",
            "Features":[
               "cold drawn",
               "straightened"
            ],
            "Item_Availability":"No tabular data for item 129159 was provided, so I cannot determine whether KKSP Precision Machining LLC has any open demand or if the item is available around the March 18, 2025 delivery date. Please supply the Date, Quantity, Customer/Vendor, and QtyOnHand rows for analysis.",
            "rank":1,
            "rank_justification":"Cold drawn and straightened only, exactly matches 12L14 steel 1.1875″ round bar with no unnecessary end prep."
         },
         {
            "item":129160,
            "overview":"ASTM,12L14,Q003,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1.18550,1.18750,,,,,144.00000,146.00000,2.67,,,Chamfered Both,Cold Drawn,Straighten,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1855,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,RD  ,1.1875/1.1855 ,144,146",
            "Features":[
               "chamfered both ends",
               "cold drawn",
               "straightened"
            ],
            "Item_Availability":"The only record for item 129160 is a zero-on-hand balance as of 2016-02-01, with no supply or demand entries thereafter. There are no open or future demand orders for KKSP Precision Machining LLC. No availability is indicated around the 2025-03-18 delivery date.",
            "rank":9,
            "rank_justification":"Cold drawn, straightened, and chamfered both ends; extra end prep beyond PO spec."
         },
         {
            "item":129161,
            "overview":"ASTM,12L14,Q003,CF Bar,RD,,,,,,,,,,,,,,,,,,PACKAGING,,,,,,,,,,,1.18550,1.18750,,,,,144.00000,146.00000,2.67,,,Chamfered Both,Cold Drawn,Straighten,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1855,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,RD  ,1.1875/1.1855 ,144,146",
            "Features":[
               "chamfered both ends",
               "cold drawn",
               "straightened"
            ],
            "Item_Availability":"There are no demand or supply transactions for item 129161 beyond a zero balance on hand as of 2016-02-01, so KKSP Precision Machining LLC has no open orders. No inventory is on hand nor scheduled for delivery around the PO date of 2025-03-18.",
            "rank":10,
            "rank_justification":"Same as 129160 but packaged differently; extra chamfering not in PO."
         },
         {
            "item":109723,
            "overview":"ASTM,12L14,Q003,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1.18690,1.18750,,,144.00000,144.00000,2.67,,,Ground,Polished,Chamfered Both,Cold Drawn",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1869,
            "lengthMaximum":144.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,RD  ,1.1875/1.1869 ,144,144",
            "Features":[
               "ground",
               "polished",
               "chamfered both ends",
               "cold drawn"
            ],
            "Item_Availability":"There are no upcoming demands or supplies for item 109723—only a zero on-hand balance dated 2016-02-01. Inventory stands at zero with no scheduled replenishment around the 2025-03-18 PO delivery date.",
            "rank":14,
            "rank_justification":"Ground, polished, chamfered both ends, cold drawn; multiple overspec features."
         },
         {
            "item":109724,
            "overview":"ASTM,12L14,Q003,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1.18690,1.18750,,,144.00000,144.00000,2.67,,,Ground,Polished,Cold Drawn",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q003",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1869,
            "lengthMaximum":144.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory JDM A0 QL1 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,RD  ,1.1875/1.1869 ,144,144",
            "Features":[
               "ground",
               "polished",
               "cold drawn"
            ],
            "Item_Availability":"I can’t assess open orders or upcoming availability without the actual rows of your tabular data. Please provide the Date, Quantity, CustomerorVendorName, and QtyOnHand entries for item 109724 so I can summarize.",
            "rank":13,
            "rank_justification":"Ground and polished in addition to cold drawn; overspecified relative to PO."
         },
         {
            "item":122726,
            "overview":"ASTM,12L14,Q040,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1.18550,1.18750,,,,,144.00000,146.00000,2.67,,,Cold Drawn,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q040",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1855,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 to Parker Hannifin 6000 Rev. AK, Grade 60040 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,RD  ,1.1875/1.1855 ,144,146",
            "Features":[
               "cold drawn"
            ],
            "Item_Availability":"Could you please provide the actual tabular data for item 122726? I need the Date, Quantity, CustomerOrVendorName, and QtyOnHand entries to determine open orders and availability around the PO delivery date.",
            "rank":2,
            "rank_justification":"Cold drawn only; minimal processing best aligns with plain 12′ 1.1875″ round bar requirement."
         },
         {
            "item":129526,
            "overview":"ASTM,12L14,Q040,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1.18550,1.18750,,,,,144.00000,146.00000,2.67,,,Sawcut Both,Cold Drawn,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q040",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1855,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 to Parker Hannifin 6000 Rev. AK, Grade 60040 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,RD  ,1.1875/1.1855 ,144,146",
            "Features":[
               "saw cut both ends",
               "cold drawn"
            ],
            "Item_Availability":"No tabular data was provided for item 129526, so I cannot determine whether KKSP Precision Machining LLC has any upcoming demand orders. Likewise, without supply dates and quantities I’m unable to assess availability around the 2025-03-18 delivery date.",
            "rank":5,
            "rank_justification":"Cold drawn with saw cut both ends; acceptable extra feature but not specified in PO."
         },
         {
            "item":129527,
            "overview":"ASTM,12L14,Q040,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1.18550,1.18750,,,,,144.00000,146.00000,2.67,,,Sawcut Both,Chamfered 1 End,Cold Drawn,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q040",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1855,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 to Parker Hannifin 6000 Rev. AK, Grade 60040 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,RD  ,1.1875/1.1855 ,144,146",
            "Features":[
               "saw cut both ends",
               "chamfered one end",
               "cold drawn"
            ],
            "Item_Availability":"No future demand or supply transactions exist for item 129527, so KKSP Precision Machining LLC has no open orders in the provided data. On-hand quantity is zero and there are no scheduled receipts around the March 18, 2025 delivery date, so availability within the following two months cannot be confirmed.",
            "rank":12,
            "rank_justification":"Cold drawn with saw cut both ends plus one-end chamfer; extra features not requested."
         },
         {
            "item":129518,
            "overview":"ASTM,12L14,Q040,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1.18550,1.18750,,,,,144.00000,146.00000,2.67,,,Chamfered 1 End,Cold Drawn,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q040",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1855,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 to Parker Hannifin 6000 Rev. AK, Grade 60040 - Finish",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,RD  ,1.1875/1.1855 ,144,146",
            "Features":[
               "chamfered one end",
               "cold drawn"
            ],
            "Item_Availability":"There are no open demand orders for KKSP Precision Machining LLC for item 129518; only a historical on-hand balance of 3,580 units as of 2016-02-01 is recorded. No future supply or demand events are scheduled around the 2025-03-18 delivery date, so availability in the coming months cannot be confirmed.",
            "rank":7,
            "rank_justification":"Cold drawn with one-end chamfer; slight extra processing beyond PO."
         },
         {
            "item":129682,
            "overview":"ASTM,12L14,Q060,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1.18550,1.18750,,,,,144.00000,146.00000,2.67,,,Saw Cut 1 End ,Chamfered 1 End,Cold Drawn,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q060",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1855,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory - Finished",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,RD  ,1.1875/1.1855 ,144,146",
            "Features":[
               "saw cut one end",
               "chamfered one end",
               "cold drawn"
            ],
            "Item_Availability":"KKSP Precision Machining LLC has no open orders for item 129682; all upcoming demands in the schedule are from HERKER INDUSTRIES. As of the PO delivery date (2025-03-18) there is no stock on hand and no supply until 2025-05-16. The first replenishment of 36,000 units occurs two months after the requested delivery date.",
            "rank":11,
            "rank_justification":"Cold drawn with one-end saw cut and one-end chamfer; more end processing than needed."
         },
         {
            "item":128526,
            "overview":"ASTM,12L14,Q060,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1.18550,1.18750,,,,,144.50000,146.00000,2.67,,,Cold Drawn,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q060",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1855,
            "lengthMaximum":146.0,
            "lengthMinimum":144.5,
            "specDesc":"12L14 General Inventory - Finished",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,RD  ,1.1875/1.1855 ,144.5,146",
            "Features":[
               "cold drawn"
            ],
            "Item_Availability":"KKSP Precision Machining LLC has no open orders for item 128526 in the data. There are no supply transactions around the 2025-03-18 delivery date, with the next supply of 1 unit not arriving until 2025-08-29 and multiple demands in May–June driving the on-hand balance negative.",
            "rank":3,
            "rank_justification":"Cold drawn only; correct material, diameter and length with no extra end features."
         },
         {
            "item":109719,
            "overview":"ASTM,12L14,Q060,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1.18550,1.18750,,,,,144.00000,146.00000,2.67,,,Cold Drawn,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q060",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1855,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory - Finished",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"Y",
            "Item_description":"12L14,RD  ,1.1875/1.1871 ,144,146",
            "Features":[
               "cold drawn"
            ],
            "Item_Availability":"There are no demand entries for item 109719 by KKSP Precision Machining LLC; only a zero on-hand balance dated 2016-02-01 is recorded. No supply or demand is listed near the PO delivery date of 2025-03-18. The item is therefore not available.",
            "rank":4,
            "rank_justification":"Cold drawn only, meets spec precisely and was recently purchased – no extra end prep."
         },
         {
            "item":109721,
            "overview":"ASTM,12L14,Q060,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1.18550,1.18750,,,,,144.00000,146.00000,2.67,,,Chamfered 1 End,Cold Drawn,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q060",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1855,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory - Finished",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,RD  ,1.1875/1.1855 ,144,146",
            "Features":[
               "chamfered one end",
               "cold drawn"
            ],
            "Item_Availability":"KKSP Precision Machining LLC has no open orders for item 109721 (all future demands are under customer 129682). Inventory is negative approaching the 2025-03-18 PO date, with no supply scheduled until 2025-06-13. Therefore the item is not available around the requested delivery window.",
            "rank":8,
            "rank_justification":"Cold drawn with one-end chamfer; correct size but extra chamfer not requested."
         },
         {
            "item":109722,
            "overview":"ASTM,12L14,Q060,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1.18550,1.18750,,,,,144.00000,146.00000,2.67,,,Chamfered Both,Cold Drawn,,",
            "MaterialStatus":"Active",
            "Stocked":"Y",
            "Grade":"12L14",
            "specCode":"Q060",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1855,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory - Finished",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"Y",
            "Item_description":"12L14,RD  ,1.1875/1.1855 ,144,146",
            "Features":[
               "chamfered both ends",
               "cold drawn"
            ],
            "Item_Availability":"KKSP Precision Machining LLC has no open future demand orders for item 109722 in the provided data. The on-hand balance remains at 87,580 through March and April 2025, with the next activity only on May 16, indicating the item is available around the PO delivery date.",
            "rank":6,
            "rank_justification":"Cold drawn & chamfered both ends; stocked and purchased recently, though chamfer not in PO."
         },
         {
            "item":119812,
            "overview":"ASTM,12L14,Q060,CF Bar,RD,,,,,,,,,,,,,,,,,,,,,,,,,,,,,1.18710,1.18750,,,,,144.00000,146.00000,2.67,,,Ground,Polished,Chamfered Both,Cold Drawn,,",
            "MaterialStatus":"Active",
            "Stocked":"N",
            "Grade":"12L14",
            "specCode":"Q060",
            "Shape":"RD",
            "itemType":"CF Bar",
            "diameterMaximum":1.1875,
            "diameterMinimum":1.1871,
            "lengthMaximum":146.0,
            "lengthMinimum":144.0,
            "specDesc":"12L14 General Inventory - Finished",
            "grainType":"C.G.P.",
            "purchased_in_last_two_year":"N",
            "Item_description":"12L14,RD  ,1.1875/1.1871 ,144,146",
            "Features":[
               "ground",
               "polished",
               "chamfered both ends",
               "cold drawn"
            ],
            "Item_Availability":"KKSP Precision Machining LLC has no open orders for item 119812 in the provided data. There are no supply or demand events around the 2025-03-18 PO date; the only upcoming transactions are four Muntz Industries demands in early May 2025. The on-hand balance remains at 12,183 units through March, indicating sufficient availability for the requested delivery date.",
            "rank":15,
            "rank_justification":"Ground, polished, chamfered both ends, cold drawn with tight tolerance; far more processing than PO calls for."
         }
      ]
   }
];

// -------------------- END STATIC INPUTS --------------------

// Utility: produce table for initial PO list
function createTableFromData(data) {
  if (!Array.isArray(data) || data.length === 0)
    return '<div class="no-data">No data found</div>';

  const keys = Object.keys(data[0]);
  let table = "<table><thead><tr>";
  table +=
    '<th class="checkbox-cell"><input type="checkbox" id="selectAll" onchange="toggleAllCheckboxes()"></th>';

  const keyDisplayMap = {
    PURCHASE_ORDER_NUMBER: "Purchase Order Number",
    LINE_NUMBER: "Line Number",
    DELIVERY_DATE: "Delivery Date",
    ITEM_DESCRIPTION: "Item Description",
    CUSTOMER_NAME: "Customer Name",
    Grade: "Grade",
    Shape: "Shape",
    Diameter: "Diameter",
    Length: "Length",
    "Finish Type": "Finish Type",
    Ground: "Ground",
  };

  keys.forEach((key) => {
    if (keyDisplayMap[key]) {
      table += `<th>${keyDisplayMap[key]}</th>`;
    }
  });

  table += "</tr></thead><tbody>";

  data.forEach((row, index) => {
    const uniqueId = `${row.PURCHASE_ORDER_NUMBER}-${row.LINE_NUMBER}`;
    table += "<tr>";
    table += `<td class="checkbox-cell"><input type="checkbox" class="po-checkbox" value="${uniqueId}" data-index="${index}" onchange="updateProcessButton()"></td>`;

    keys.forEach((key) => {
      if (keyDisplayMap[key]) {
        let cellValue = row[key];
        if (Array.isArray(cellValue)) {
          cellValue = cellValue.length > 0 ? cellValue.join(", ") : "None";
        } else if (typeof cellValue === "object" && cellValue !== null) {
          cellValue = JSON.stringify(cellValue);
        } else if (
          cellValue === "" ||
          cellValue === null ||
          cellValue === undefined
        ) {
          cellValue = "N/A";
        }
        table += `<td>${cellValue}</td>`;
      }
    });
    table += "</tr>";
  });
  table += "</tbody></table>";
  return table;
}

function toggleAllCheckboxes() {
  const selectAll = document.getElementById("selectAll");
  const checkboxes = document.querySelectorAll(".po-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
  updateProcessButton();
}

function updateProcessButton() {
  const checkboxes = document.querySelectorAll(".po-checkbox:checked");
  const processBtn = document.getElementById("processBtn");
  processBtn.disabled = checkboxes.length === 0;

  if (checkboxes.length > 0) {
    processBtn.textContent = `Process ${checkboxes.length} Selected Order${checkboxes.length > 1 ? "s" : ""}`;
  } else {
    processBtn.textContent = "Process Selected Orders";
  }
}

function renderInitialTable(data) {
  const container = document.getElementById("poTableContainer");
  container.innerHTML = createTableFromData(data);
}

// Updated: processPOs matches against local processedDataAll and renders only matched processed entries
async function processPOs() {
  const selectedCheckboxes = document.querySelectorAll(".po-checkbox:checked");

  if (selectedCheckboxes.length === 0) {
    alert("Please select at least one purchase order");
    return;
  }

  // Get the selected PO records based on checked checkboxes
  const selectedPOData = Array.from(selectedCheckboxes).map((checkbox) => {
    const index = parseInt(checkbox.dataset.index, 10);
    return poData[index];
  });

  const container = document.getElementById("processedTableContainer");
  container.innerHTML =
    '<div class="loading">Processing selected orders (using local static data)...</div>';

  // For each selected PO, find its processed counterpart in processedDataAll
  const matchedProcessed = [];
  selectedPOData.forEach((po) => {
    // Matching by PO number + line number — both are strings in processedDataAll
    const match = processedDataAll.find(
      (p) =>
        String(p.PURCHASE_ORDER_NUMBER) === String(po.PURCHASE_ORDER_NUMBER) &&
        String(p.LINE_NUMBER) === String(po.LINE_NUMBER)
    );
    if (match) {
      matchedProcessed.push(match);
    } else {
      // Optionally, you could push a minimal object indicating "no processed data found"
      console.warn(`No processed data found for ${po.PURCHASE_ORDER_NUMBER} - Line ${po.LINE_NUMBER}`);
    }
  });

  // Render matched processed results (only those selected and matched)
  if (matchedProcessed.length === 0) {
    container.innerHTML = '<div class="no-data">No recommendations found for selected orders</div>';
  } else {
    // Simulate async behavior for UI consistency (not required)
    setTimeout(() => {
      renderProcessedTable(matchedProcessed);
    }, 200);
  }
}

function renderProcessedTable(data) {
  const container = document.getElementById("processedTableContainer");

  if (!data || data.length === 0) {
    container.innerHTML =
      '<div class="no-data">No recommendations found for selected orders</div>';
    return;
  }

  container.innerHTML = "";

  data.forEach((po, index) => {
    const detailId = `detail-${index}`;

    let html = `
                <div class="recommendation-card">
                    <div class="card-header">
                        <h3>Purchase Order: ${po.PURCHASE_ORDER_NUMBER} - Line ${po.LINE_NUMBER}</h3>
                    </div>
                    <div class="card-summary">
                        <table class="summary-table">
                            <tr><th>Purchase Order Number</th><td>${po.PURCHASE_ORDER_NUMBER}</td></tr>
                            <tr><th>Line Number</th><td>${po.LINE_NUMBER}</td></tr>
                            <tr><th>Customer Name</th><td>${po.CUSTOMER_NAME || "N/A"}</td></tr>
                            <tr><th>Item Description</th><td>${po.ITEM_DESCRIPTION || po.PO_DESCRIPTION || "N/A"}</td></tr>
                        </table>
                        <button class="read-more-btn" onclick="toggleDetails('${detailId}', this)">
                            Read More ▼
                        </button>
                    </div>
                    <div class="detailed-content" id="${detailId}">
                        <table class="summary-table">
                            <tr><th>Delivery Date</th><td>${po.DELIVERY_DATE || "N/A"}</td></tr>
                            <tr><th>Grade</th><td>${po.Grade || "N/A"}</td></tr>
                            <tr><th>Shape</th><td>${po.Shape || "N/A"}</td></tr>
                            <tr><th>Finish Type</th><td>${po["Finish Type"] || po.Finish_Type || "N/A"}</td></tr>
                            <tr><th>Ground</th><td>${po.Ground || "N/A"}</td></tr>
                            <tr><th>Diameter</th><td>${po.Diameter || po.diameterMinimum || "N/A"}${po.diameterMaximum ? ` - ${po.diameterMaximum}` : ""}</td></tr>
                            <tr><th>Length</th><td>${po.Length || po.lengthMinimum || "N/A"}${po.lengthMaximum ? ` - ${po.lengthMaximum}` : ""}</td></tr>
                        </table>
            `;

    if (po.Selected_items && po.Selected_items.length > 0) {
      html += '<div class="selected-items"><h3>Selected Items & Recommendations</h3>';

      po.Selected_items.sort((a, b) => (a.rank || 999) - (b.rank || 999)).forEach((item, itemIndex) => {
        html += `
                            <div class="item-card">
                                <h4>Item ${item.item || itemIndex + 1} <span class="rank-badge">Rank #${item.rank || itemIndex + 1}</span></h4>
                                <div class="item-detail"><strong>Description:</strong> ${item.Item_description || "N/A"}</div>
                                <div class="item-detail"><strong>Overview:</strong> ${item.overview || "N/A"}</div>
                                <div class="item-detail"><strong>Status:</strong> ${item.MaterialStatus || "N/A"}</div>
                                <div class="item-detail"><strong>Availability:</strong> ${item.Item_Availability || "N/A"}</div>
                                ${ item.rank_justification ? `<div class="item-detail"><strong>Justification:</strong> ${item.rank_justification}</div>` : "" }
                                ${ item.Features && item.Features.length > 0 ? `<div class="item-detail"><strong>Features:</strong> ${item.Features.join(", ")}</div>` : "" }
                            </div>
                        `;
      });
      html += "</div>";
    } else {
      html += '<div class="no-data">No item recommendations available</div>';
    }

    html += "</div></div>";
    container.innerHTML += html;
  });
}

function toggleDetails(detailId, button) {
  const detailDiv = document.getElementById(detailId);

  if (detailDiv.classList.contains("show")) {
    detailDiv.classList.remove("show");
    button.innerHTML = "Read More ▼";
  } else {
    detailDiv.classList.add("show");
    button.innerHTML = "Read Less ▲";
  }
}

// Wire up DOM loaded
document.addEventListener("DOMContentLoaded", function () {
  renderInitialTable(poData);

  // attach process button action if present
  const processBtn = document.getElementById("processBtn");
  if (processBtn) {
    processBtn.addEventListener("click", processPOs);
  }
});
