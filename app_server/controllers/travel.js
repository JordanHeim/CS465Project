/* GET travel view */
const travel = (req, res) => {
    res.redner('travel', { title: 'Travlr Getaways'});
};
module.exports = {
    travel
};