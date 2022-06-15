-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "people" (
    "id" SERIAL NOT NULL,
    "person_id" VARCHAR(50) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,
    "mail" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(50) NOT NULL,

    CONSTRAINT "people_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "personId" INTEGER NOT NULL,
    "rolId" INTEGER NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "companies" (
    "id" SERIAL NOT NULL,
    "nit" VARCHAR(50) NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "front_proyect_id" VARCHAR(50) NOT NULL,
    "userId" INTEGER NOT NULL,
    "companieId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,
    "portfolioId" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "longitude" VARCHAR(50) NOT NULL,
    "latitude" VARCHAR(50) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_states" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "project_states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "aux_portfolios" (
    "id" SERIAL NOT NULL,
    "clasificationId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "aux_portfolios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clasification" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "clasification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolios" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "auxId" INTEGER NOT NULL,

    CONSTRAINT "portfolios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "baselines" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "baseline" INTEGER NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "real_start_date" DATE NOT NULL,

    CONSTRAINT "baselines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reports" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "baselineId" INTEGER NOT NULL,
    "state_date" DATE NOT NULL,
    "planned_time" INTEGER NOT NULL,
    "current_time" INTEGER NOT NULL,
    "planned_cost" INTEGER NOT NULL,
    "current_cost" INTEGER NOT NULL,
    "planned_reach" INTEGER NOT NULL,
    "current_reach" INTEGER NOT NULL,
    "end_variation" INTEGER NOT NULL,
    "total_budget_abl" INTEGER NOT NULL,
    "total_budnet_projected" INTEGER NOT NULL,
    "projected_end_date" DATE NOT NULL,
    "request_made" INTEGER NOT NULL,
    "request_accepted" INTEGER NOT NULL,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "archievements" (
    "id" SERIAL NOT NULL,
    "archiebement" VARCHAR(50) NOT NULL,
    "reportId" INTEGER NOT NULL,

    CONSTRAINT "archievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "difficulties" (
    "id" SERIAL NOT NULL,
    "difficulty" VARCHAR(50) NOT NULL,
    "reportId" INTEGER NOT NULL,

    CONSTRAINT "difficulties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "perspective" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "perspective_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "objetives" (
    "id" SERIAL NOT NULL,
    "prespectiveId" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(250) NOT NULL,

    CONSTRAINT "objetives_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "objetive_indicators" (
    "id" SERIAL NOT NULL,
    "objectiveId" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "goal" DOUBLE PRECISION NOT NULL,
    "periodicity" VARCHAR(50) NOT NULL,

    CONSTRAINT "objetive_indicators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "initiatives" (
    "id" SERIAL NOT NULL,
    "objectiveId" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(250) NOT NULL,

    CONSTRAINT "initiatives_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "action_plans" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(250) NOT NULL,
    "initiativeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "action_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plan_states" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "plan_states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "processes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(250) NOT NULL,
    "efficiency" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "processes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "process_indicators" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "objetive" VARCHAR(50) NOT NULL,
    "periodicity" VARCHAR(50) NOT NULL,
    "in_charge" VARCHAR(50) NOT NULL,
    "weight" VARCHAR(50) NOT NULL,
    "processId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "process_indicators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "periodic_records" (
    "id" SERIAL NOT NULL,
    "indicatorId" INTEGER NOT NULL,
    "record_date" VARCHAR(50) NOT NULL,
    "expected_value" INTEGER NOT NULL,
    "archieved_value" INTEGER NOT NULL,

    CONSTRAINT "periodic_records_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_personId_key" ON "users"("personId");

-- CreateIndex
CREATE UNIQUE INDEX "projects_portfolioId_key" ON "projects"("portfolioId");

-- CreateIndex
CREATE UNIQUE INDEX "process_indicators_userId_key" ON "process_indicators"("userId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_personId_fkey" FOREIGN KEY ("personId") REFERENCES "people"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_companieId_fkey" FOREIGN KEY ("companieId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "project_states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "portfolios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aux_portfolios" ADD CONSTRAINT "aux_portfolios_clasificationId_fkey" FOREIGN KEY ("clasificationId") REFERENCES "clasification"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aux_portfolios" ADD CONSTRAINT "aux_portfolios_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "portfolios" ADD CONSTRAINT "portfolios_auxId_fkey" FOREIGN KEY ("auxId") REFERENCES "aux_portfolios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "baselines" ADD CONSTRAINT "baselines_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_baselineId_fkey" FOREIGN KEY ("baselineId") REFERENCES "baselines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "archievements" ADD CONSTRAINT "archievements_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "reports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "difficulties" ADD CONSTRAINT "difficulties_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "reports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "objetives" ADD CONSTRAINT "objetives_prespectiveId_fkey" FOREIGN KEY ("prespectiveId") REFERENCES "perspective"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "objetive_indicators" ADD CONSTRAINT "objetive_indicators_objectiveId_fkey" FOREIGN KEY ("objectiveId") REFERENCES "objetives"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "initiatives" ADD CONSTRAINT "initiatives_objectiveId_fkey" FOREIGN KEY ("objectiveId") REFERENCES "objetives"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action_plans" ADD CONSTRAINT "action_plans_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action_plans" ADD CONSTRAINT "action_plans_initiativeId_fkey" FOREIGN KEY ("initiativeId") REFERENCES "initiatives"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action_plans" ADD CONSTRAINT "action_plans_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "plan_states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "process_indicators" ADD CONSTRAINT "process_indicators_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "process_indicators" ADD CONSTRAINT "process_indicators_processId_fkey" FOREIGN KEY ("processId") REFERENCES "processes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "periodic_records" ADD CONSTRAINT "periodic_records_indicatorId_fkey" FOREIGN KEY ("indicatorId") REFERENCES "process_indicators"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
