import AllureReporter from "@wdio/allure-reporter";

class Logs{
addLog(message : String){

AllureReporter.addStep('TESTS:$(message)');

}


}
export default new Logs();