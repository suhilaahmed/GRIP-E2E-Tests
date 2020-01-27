class TestDataManager {
    constructor() {
        const JSON_TEST_DATA_PATH = '../resources/testData.json';
        this.TestData = JSON.parse(require("fs").readFileSync(JSON_TEST_DATA_PATH));
    }
}

class ObjectIdentifierManager extends TestDataManager {
    constructor() {
        super();
        const JSON_OBJECTS_PATH = '../resources/webLocators.json';
        this.ObjectIdentifiers = JSON.parse(require("fs").readFileSync(JSON_OBJECTS_PATH));
    }
}

export class Hola extends ObjectIdentifierManager {
    constructor() {
        super();
    }
}
