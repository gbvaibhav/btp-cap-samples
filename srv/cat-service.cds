using my.bookshop as my from '../db/schema';

service CatalogService {
    @readonly entity Books as projection on my.Books;
}

annotate genericService with @cds.server.body_parser.limit: '5mb';
// also can set the body parser limit to a perticular service in this manner.

service genericService {
    function getCDSVersion() returns String;
    // https://cap.cloud.sap/docs/node.js/cds-facade#properties
    function getCDSProperty(prop: String) returns String;

    function cdsExit() returns String;
}