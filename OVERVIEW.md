# OVERVIEW

## Algorithm
1. Read data from json
2. Delete old data from the database *(optional)*
3. Save data from json to the database
4. Calculate time rate for each donor. Time rate  is a value which calculates by following formula
```
EXPECTED_DONATION_VALUE / COMUNICATION_CHANNEL_TIME_BUDGET 
```
5. Sort list of donors by it's time rate in descending order
6. Take first donor from list and save it to output list
7. Compare engagement time with minimal time budget. If engagement time lower than minimal time budget, then go to the step **11** else to the next step
8. Compare time budget of this donor with engagement time. If time budget greater than engagement time, then go to the step **10** else to the next step
9. Substract first donor time budget from the engagement time
10. Get next donor and go to step **7**
11. Write output to ANS.json file
