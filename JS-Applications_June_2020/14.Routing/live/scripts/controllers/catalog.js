// import { data } from "jquery";

import { getTeams } from '../data.js'

export default async function () {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        team: await this.load('./templates/catalog/team.hbs')
    };

    const teams = await getTeams();

    const data = Object.assign({teams}, this.app.userData);
    // data.teams = [
    //     {
    //         _id: '1',
    //         name: 'Pesho',
    //         comment: 'no content'
    //     },
    //     {
    //         _id: '2',
    //         name: 'Gosho',
    //         comment: 'no content'
    //     }
    // ]


    this.partial('./templates/catalog/teamCatalog.hbs', data);
}
