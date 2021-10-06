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

/* TODO Trigger when insert tblTerms, set timestamps
/* TODO Trigger when update tblTerms, set lastchangedTimestamp