DROP SCHEMA IF EXISTS dbLocations;
CREATE SCHEMA IF NOT EXISTS dbLocations;
CREATE TABLE IF NOT EXISTS dbLocations.Location (
  id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL,
  userUid VARCHAR(50) NOT NULL,
  dateT DATETIME NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS dbLocations.fbUser (
  userUid VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  telefono INT(8) NOT NULL,
  activo BOOLEAN NULL,
  PRIMARY KEY(userUid)
);


INSERT INTO dbLocations.Location(latitude, longitude, userUid, dateT)
VALUES('20.30303', '15.03040', 'wIt7iH4C6Lc2WBCusCrsbsJPPQT2','9999-12-31 23:59:59');

INSERT INTO dbLocations.fbUser(userUid, email, telefono, activo)
VALUES ("wIt7iH4C6Lc2WBCusCrsbsJPPQT2", "rvaldez@solutionsda.com", "54328620", true);
