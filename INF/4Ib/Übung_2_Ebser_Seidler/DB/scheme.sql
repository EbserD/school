CREATE TABLE IF NOT EXISTS tblTerms (
	termID int NOT NULL AUTO_INCREMENT,
    term VARCHAR(60),
    termDescription VARCHAR(200),
    categoryID INT NOT NULL,
    creatonTimestamp DATETIME,
    lastchangedTimestamp DATETIME,
    PRIMARY KEY (termID),
    FOREIGN KEY (categoryID) REFERENCES tblCategories(categoryID)
);

CREATE TABLE IF NOT EXISTS tblCategories (
	categoryID INT AUTO_INCREMENT,
	categoryName Varchar(45),
    PRIMARY KEY (categoryID)
);

-- TODO Trigger when insert tblTerms, set timestamps
-- TODO Trigger when update tblTerms, set lastchangedTimestamp

CREATE TRIGGER insertDatetime BEFORE INSERT ON tblTerms
       FOR EACH ROW 
       SET 
		new.creatonTimestamp = now(),
		new.lastchangedTimestamp = now();

CREATE TRIGGER updateDatetime BEFORE UPDATE ON tblTerms
       FOR EACH ROW 
       SET
		new.lastchangedTimestamp = now();
        
        
INSERT INTO tblcategories (categoryName)
VALUES 
("Netzwerktechnik"),
("Datenbanken"),
("Softwareentwicklung");

INSERT INTO tblTerms (term, termDescription, categoryID)
VALUES 
("Routing", "Routing bezeichnet in der Telekommunikation das Festlegen von Wegen für Nachrichtenströme bei der Nachrichtenübermittlung in Rechnernetzen. ", 1),
("sequenzielles Abarbeiten", "Ist das Abarbeiten aufeinander folgend", 3);