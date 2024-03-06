import inquirer from "inquirer";
import chalk from "chalk";
let marks = await inquirer.prompt([
        {
        type:"number",
        name:"aI",
        message:"Enter Artifical Intilegence Marks => "
        },
        {
        type:"number",
        name:"tS",
        message:"Enter TypeScript Marks => "
        },
        {
        type:"number",
        name:"jS",
        message:"Enter JavaScript Marks  => "
        },
        {
        type:"number",
        name:"python",
        message:"Enter Python Marks => "
        },            
        {
        type:"number",
        name:"sql",
        message:"Enter SQL Marks => "
        }]);

const totalMarks =500;
let obtainMarks =marks.aI + marks.tS + marks.jS + marks.python + marks.sql;
let percentage = obtainMarks/totalMarks*100;

console.log((chalk.blue)`Total Marks =>  ${totalMarks}`);
console.log((chalk.green)`Obtain Marks =>  ${obtainMarks}`);
console.log((chalk.redBright)`Percentage =>  ${percentage} `,`%`);

    if(percentage >= 80 && percentage < 100){
        console.log((chalk.yellowBright)`Congratulation for => A-1 Grade`);   
    }
        else if (percentage >=70 && percentage < 80){
            console.log((chalk.yellowBright)`You Got => A-Grade`);
        }
        else if (percentage >=60 && percentage < 70){
            console.log((chalk.yellowBright)`You Got => B-Grade`);
        }
        else if (percentage >=50 && percentage < 60){
            console.log((chalk.yellowBright)`You Got => C-Grade`);
        }
        else if (percentage >=40 && percentage < 50){
            console.log((chalk.yellowBright)`You Got => D-Grade`);
        }
    
    else{
    console.log((chalk.yellowBright)` Fail Sorry Keep try Again`);
}












