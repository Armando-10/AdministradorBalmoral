const roles = {
    "Dirección General": {
        subroles: [],
        people: [
            {
                name: "Alma Montes",
                photo: "assets/img/user.png",
                details: {
                    Amabilidad: 85,
                    Responsabilidad: 90,
                    "Trabajo en Equipo": 80,
                    Puntualidad: 75,
                    Creatividad: 70,
                    Liderazgo: 95
                },
                kpis: {
                    "Gestión Administrativa": [
                        {
                            no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                            indicador: "% de satisfacción con la gestión de la agenda y actividades de la Dirección General",
                            kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "88%"
                        }
                    ],
                    "Evaluación del Desempeño 360": [
                        {
                            no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                            indicador: "Calificación obtenida por subdirectores",
                            kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "90%"
                        }
                    ],
                    "Necesidades Institucionales": [
                        {
                            no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                            indicador: "Participar en los procesos de capacitación asignados por la Dirección General",
                            kpi: "100%", meta: "100%", responsable: "Dir. General", resultado: "95%"
                        }
                    ]
                }
            }
        ]
    },
    "Subdirecciones": {
        subroles: {
            "Evaluaciones Académicas": [
                {
                    name: "Juan Pérez",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 70,
                        Responsabilidad: 85,
                        "Trabajo en Equipo": 75,
                        Puntualidad: 80,
                        Creatividad: 65,
                        Liderazgo: 60
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "X", fi: "", ge: "", af: "", dg: "", e: "", o: "O",
                                indicador: "% de impresión de exámenes sin incidencias",
                                kpi: "100%", meta: "100%", responsable: "Sub. de Proyectos", resultado: "98%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por alumnos",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "87%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Eventos institucionales atendidos asignados en la jornada laboral",
                                kpi: "100%", meta: "100%", responsable: "Comité Técnico", resultado: "96%"
                            }
                        ]
                    }
                }
            ],
            "Gestión Escolar": [
                {
                    name: "María Gómez",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 80,
                        Responsabilidad: 75,
                        "Trabajo en Equipo": 85,
                        Puntualidad: 70,
                        Creatividad: 70,
                        Liderazgo: 65
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "X", fi: "", ge: "", af: "", dg: "", e: "", o: "O",
                                indicador: "% de asignación de lockers de alumnos en los primeros 15 días de inicio de clase",
                                kpi: "100%", meta: "100%", responsable: "Sub. Gestión Académica", resultado: "94%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por su jefe inmediato",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "89%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Participación eventos de captación atendidos vs. asignados",
                                kpi: "100%", meta: "100%", responsable: "Dir. General", resultado: "99%"
                            }
                        ]
                    }
                }
            ],
            "Administrativa": [
                {
                    name: "Carlos López",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 65,
                        Responsabilidad: 90,
                        "Trabajo en Equipo": 70,
                        Puntualidad: 85,
                        Creatividad: 60,
                        Liderazgo: 70
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "% de realización de la facturación de pagos a padres de familia en tiempo y forma",
                                kpi: "100%", meta: "100%", responsable: "Sub. Administrativo", resultado: "97%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por la Dirección General",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "86%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Atender indicaciones directas de los subdirectores y Dirección General",
                                kpi: "100%", meta: "100%", responsable: "Comité Técnico", resultado: "98%"
                            }
                        ]
                    }
                }
            ],
            "Proyectos": [
                {
                    name: "Ana Martínez",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 75,
                        Responsabilidad: 80,
                        "Trabajo en Equipo": 70,
                        Puntualidad: 65,
                        Creatividad: 85,
                        Liderazgo: 75
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "X", fi: "", ge: "", af: "", dg: "", e: "", o: "O",
                                indicador: "% de impresión de exámenes sin incidencias",
                                kpi: "100%", meta: "100%", responsable: "Sub. de Proyectos", resultado: "99%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por sus pares",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "88%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Eventos institucionales atendidos asignados en la jornada laboral",
                                kpi: "100%", meta: "100%", responsable: "Comité Técnico", resultado: "97%"
                            }
                        ]
                    }
                }
            ],
            "Planeación": [
                {
                    name: "Luis Hernández",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 70,
                        Responsabilidad: 85,
                        "Trab hallwayo en Equipo": 75,
                        Puntualidad: 80,
                        Creatividad: 65,
                        Liderazgo: 70
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Elaboración de reporte anual de proveedores vigentes",
                                kpi: "1", meta: "1", responsable: "Sub. Administrativo", resultado: "1"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por los docentes",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "84%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Participar en los procesos de capacitación asignados por la Dirección General",
                                kpi: "100%", meta: "100%", responsable: "Dir. General", resultado: "96%"
                            }
                        ]
                    }
                }
            ],
            "Eventos": [
                {
                    name: "Sofía Ramírez",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 80,
                        Responsabilidad: 70,
                        "Trabajo en Equipo": 85,
                        Puntualidad: 75,
                        Creatividad: 80,
                        Liderazgo: 65
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "% gestión mensual de festejo de cumpleaños realizada para los colaboradores",
                                kpi: "100%", meta: "100%", responsable: "Sub. Administrativo", resultado: "95%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por alumnos",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "89%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Participación eventos de captación atendidos vs. asignados",
                                kpi: "100%", meta: "100%", responsable: "Dir. General", resultado: "98%"
                            }
                        ]
                    }
                }
            ],
            "Gestión Académica": [
                {
                    name: "Jorge Sánchez",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 75,
                        Responsabilidad: 80,
                        "Trabajo en Equipo": 70,
                        Puntualidad: 65,
                        Creatividad: 70,
                        Liderazgo: 80
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "X", fi: "", ge: "", af: "", dg: "", e: "", o: "O",
                                indicador: "% de asignación de lockers de alumnos en los primeros 15 días de inicio de clase",
                                kpi: "100%", meta: "100%", responsable: "Sub. Gestión Académica", resultado: "93%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por su jefe inmediato",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "87%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Atender indicaciones directas de los subdirectores y Dirección General",
                                kpi: "100%", meta: "100%", responsable: "Comité Técnico", resultado: "99%"
                            }
                        ]
                    }
                }
            ]
        }
    },
    "Coordinadores": {
        subroles: {
            "Humanidades": [
                {
                    name: "Elena Torres",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 80,
                        Responsabilidad: 75,
                        "Trabajo en Equipo": 85,
                        Puntualidad: 70,
                        Creatividad: 75,
                        Liderazgo: 65
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "% de cumplimiento a la elaboración de reconocimientos y diplomas vs. solicitados",
                                kpi: "100%", meta: "100%", responsable: "Sub. Administrativo", resultado: "98%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por los docentes",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "86%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Eventos institucionales atendidos asignados en la jornada laboral",
                                kpi: "100%", meta: "100%", responsable: "Comité Técnico", resultado: "97%"
                            }
                        ]
                    }
                }
            ],
            "Ciencias": [
                {
                    name: "Diego Ruiz",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 70,
                        Responsabilidad: 85,
                        "Trabajo en Equipo": 75,
                        Puntualidad: 80,
                        Creatividad: 65,
                        Liderazgo: 70
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "% de impresión de exámenes sin incidencias",
                                kpi: "100%", meta: "100%", responsable: "Sub. de Proyectos", resultado: "96%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por alumnos",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "88%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Participar en los procesos de capacitación asignados por la Dirección General",
                                kpi: "100%", meta: "100%", responsable: "Dir. General", resultado: "94%"
                            }
                        ]
                    }
                }
            ],
            "Idiomas": [
                {
                    name: "Lucía Fernández",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 85,
                        Responsabilidad: 70,
                        "Trabajo en Equipo": 80,
                        Puntualidad: 75,
                        Creatividad: 70,
                        Liderazgo: 65
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "% de asignación de lockers de alumnos en los primeros 15 días de inicio de clase",
                                kpi: "100%", meta: "100%", responsable: "Sub. Gestión Académica", resultado: "95%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por su jefe inmediato",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "87%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Atender indicaciones directas de los coordinadores y Dirección General",
                                kpi: "100%", meta: "100%", responsable: "Comité Técnico", resultado: "96%"
                            }
                        ]
                    }
                }
            ]
        }
    },
    "Docentes": {
        subroles: {
            "Tiempo Completo Counselor": [
                {
                    name: "Paula Díaz",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 80,
                        Responsabilidad: 75,
                        "Trabajo en Equipo": 85,
                        Puntualidad: 70,
                        Creatividad: 65,
                        Liderazgo: 60
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "% de cumplimiento a la elaboración de reconocimientos y diplomas vs. solicitados",
                                kpi: "100%", meta: "100%", responsable: "Sub. Administrativo", resultado: "97%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por alumnos",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "89%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Eventos institucionales atendidos asignados en la jornada laboral",
                                kpi: "100%", meta: "100%", responsable: "Comité Técnico", resultado: "95%"
                            }
                        ]
                    }
                }
            ],
            "Tiempo Completo": [
                {
                    name: "Rafael Morales",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 75,
                        Responsabilidad: 80,
                        "Trabajo en Equipo": 70,
                        Puntualidad: 85,
                        Creatividad: 70,
                        Liderazgo: 65
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "% de impresión de exámenes sin incidencias",
                                kpi: "100%", meta: "100%", responsable: "Sub. de Proyectos", resultado: "98%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por los docentes",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "86%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Participar en los procesos de capacitación asignados por la Dirección General",
                                kpi: "100%", meta: "100%", responsable: "Dir. General", resultado: "97%"
                            }
                        ]
                    }
                }
            ],
            "Asimilados": [
                {
                    name: "Clara Vega",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 70,
                        Responsabilidad: 75,
                        "Trabajo en Equipo": 80,
                        Puntualidad: 65,
                        Creatividad: 85,
                        Liderazgo: 70
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "% de asignación de lockers de alumnos en los primeros 15 días de inicio de clase",
                                kpi: "100%", meta: "100%", responsable: "Sub. Gestión Académica", resultado: "92%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por su jefe inmediato",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "88%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Atender indicaciones directas de los coordinadores y Dirección General",
                                kpi: "100%", meta: "100%", responsable: "Comité Técnico", resultado: "96%"
                            }
                        ]
                    }
                }
            ],
            "Psicólogo": [
                {
                    name: "Hugo Castillo",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 85,
                        Responsabilidad: 80,
                        "Trabajo en Equipo": 75,
                        Puntualidad: 70,
                        Creatividad: 65,
                        Liderazgo: 60
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "% de cumplimiento a la elaboración de reconocimientos y diplomas vs. solicitados",
                                kpi: "100%", meta: "100%", responsable: "Sub. Administrativo", resultado: "99%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por alumnos",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "87%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Eventos institucionales atendidos asignados en la jornada laboral",
                                kpi: "100%", meta: "100%", responsable: "Comité Técnico", resultado: "94%"
                            }
                        ]
                    }
                }
            ]
        }
    },
    "Disciplina": {
        subroles: [],
        people: [
            {
                name: "Fernando Ortiz",
                photo: "assets/img/user.png",
                details: {
                    Amabilidad: 70,
                    Responsabilidad: 85,
                    "Trabajo en Equipo": 75,
                    Puntualidad: 80,
                    Creatividad: 65,
                    Liderazgo: 70
                },
                kpis: {
                    "Gestión Administrativa": [
                        {
                            no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                            indicador: "% de cumplimiento de mantenimientos de stocks de materiales necesarios para la operación de las áreas",
                            kpi: "100%", meta: "100%", responsable: "Sub. Administrativo", resultado: "96%"
                        }
                    ],
                    "Evaluación del Desempeño 360": [
                        {
                            no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                            indicador: "Calificación obtenida por su jefe inmediato",
                            kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "88%"
                        }
                    ],
                    "Necesidades Institucionales": [
                        {
                            no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                            indicador: "Atender indicaciones directas de los subdirectores y Dirección General",
                            kpi: "100%", meta: "100%", responsable: "Comité Técnico", resultado: "97%"
                        }
                    ]
                }
            }
        ]
    },
    "Administrativos": {
        subroles: {
            "Paramédico": [
                {
                    name: "Beatriz Soto",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 80,
                        Responsabilidad: 75,
                        "Trabajo en Equipo": 85,
                        Puntualidad: 70,
                        Creatividad: 65,
                        Liderazgo: 60
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "% de cumplimiento a los expedientes de inventarios institucionales actualizados en tiempo y forma (materiales de servicio médico)",
                                kpi: "100%", meta: "100%", responsable: "Sub. Administrativo", resultado: "95%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida por la Dirección General",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "86%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Participar en los procesos de capacitación asignados por la Dirección General",
                                kpi: "100%", meta: "100%", responsable: "Dir. General", resultado: "93%"
                            }
                        ]
                    }
                }
            ],
            "Recepción": [
                {
                    name: "Gabriel Nava",
                    photo: "assets/img/user.png",
                    details: {
                        Amabilidad: 85,
                        Responsabilidad: 70,
                        "Trabajo en Equipo": 80,
                        Puntualidad: 75,
                        Creatividad: 70,
                        Liderazgo: 65
                    },
                    kpis: {
                        "Gestión Administrativa": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "% de satisfacción de la comunidad Balmoral, clientes y proveedores con el servicio de recepción",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "90%"
                            }
                        ],
                        "Evaluación del Desempeño 360": [
                            {
                                no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                                indicador: "Calificación obtenida en la evaluación por sus pares",
                                kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "88%"
                            }
                        ],
                        "Necesidades Institucionales": [
                            {
                                no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                                indicador: "Eventos y/o actividades institucionales atendidas que sean asignadas en la jornada laboral",
                                kpi: "100%", meta: "100%", responsable: "Comité Técnico", resultado: "98%"
                            }
                        ]
                    }
                }
            ]
        }
    },
    "Limpieza y Mantenimiento": {
        subroles: [],
        people: [
            {
                name: "Isabel Luna",
                photo: "assets/img/user.png",
                details: {
                    Amabilidad: 75,
                    Responsabilidad: 80,
                    "Trabajo en Equipo": 70,
                    Puntualidad: 85,
                    Creatividad: 65,
                    Liderazgo: 60
                },
                kpis: {
                    "Gestión Administrativa": [
                        {
                            no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                            indicador: "% de cumplimiento de mantenimientos de stocks de materiales de limpieza",
                            kpi: "100%", meta: "100%", responsable: "Sub. Administrativo", resultado: "94%"
                        }
                    ],
                    "Evaluación del Desempeño 360": [
                        {
                            no: 1, ea: "", fi: "", ge: "X", af: "", dg: "", e: "", o: "O",
                            indicador: "Calificación obtenida por su jefe inmediato",
                            kpi: "85%", meta: "85%", responsable: "Dir. General", resultado: "87%"
                        }
                    ],
                    "Necesidades Institucionales": [
                        {
                            no: 1, ea: "", fi: "", ge: "", af: "X", dg: "X", e: "E", o: "",
                            indicador: "Atender indicaciones directas de los subdirectores y Dirección General",
                            kpi: "100%", meta: "100%", responsable: "Comité Técnico", resultado: "96%"
                        }
                    ]
                }
            }
        ]
    }
};

// Function to get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        role: params.get('role') || 'No se ha seleccionado ningun personal',
        subrole: params.get('subrole')
    };
}

// Function to encode strings for URLs
function encode(str) {
    return encodeURIComponent(str);
}

// Function to toggle subroles
function toggleSubroles(role) {
    const subroleDiv = document.getElementById(`subrole_${role}`);
    const arrow = subroleDiv.previousElementSibling.querySelector('.arrow');
    if (subroleDiv.style.display === 'block') {
        subroleDiv.style.display = 'none';
        arrow.textContent = '▼';
    } else {
        subroleDiv.style.display = 'block';
        arrow.textContent = '▲';
    }
}

// Function to close modals
function closeProfileModal() {
    document.getElementById('profileModal').style.display = 'none';
}

function closeKpiModal() {
    document.getElementById('kpiModal').style.display = 'none';
}

function closeKpiResultsModal() {
    document.getElementById('kpiResultsModal').style.display = 'none';
}

// Function to populate sidebar
function populateSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';
    Object.keys(roles).forEach(role => {
        const data = roles[role];
        if (Object.keys(data.subroles).length === 0) {
            const roleDiv = document.createElement('div');
            roleDiv.className = 'role';
            roleDiv.innerHTML = role;
            roleDiv.onclick = () => {
                window.location.href = `?role=${encode(role)}`;
            };
            sidebar.appendChild(roleDiv);
        } else {
            const roleDiv = document.createElement('div');
            roleDiv.className = 'role';
            roleDiv.innerHTML = `${role} <span class="arrow">▼</span>`;
            roleDiv.onclick = () => toggleSubroles(role);
            sidebar.appendChild(roleDiv);

            const subroleDiv = document.createElement('div');
            subroleDiv.className = 'subrole';
            subroleDiv.id = `subrole_${role}`;
            subroleDiv.style.display = 'none';
            Object.keys(data.subroles).forEach(subrole => {
                const subroleLink = document.createElement('a');
                subroleLink.href = `?role=${encode(role)}&subrole=${encode(subrole)}`;
                subroleLink.textContent = subrole;
                subroleDiv.appendChild(subroleLink);
            });
            sidebar.appendChild(subroleDiv);
        }
    });
}

// Function to populate content
function populateContent() {
    const { role, subrole } = getUrlParams();
    const titleElement = document.getElementById('content-title');
    const peopleContainer = document.getElementById('people-container');
    peopleContainer.innerHTML = '';

    let title = role;
    let people = [];
    if (subrole && roles[role] && roles[role].subroles[subrole]) {
        title = subrole;
        people = roles[role].subroles[subrole];
    } else if (roles[role]) {
        people = roles[role].people || [];
    }

    titleElement.textContent = title;

    people.forEach(person => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${person.photo}" alt="${person.name}">
            <h3>${person.name}</h3>
            <button class="profile-btn" 
                    data-name="${person.name}" 
                    data-photo="${person.photo}" 
                    data-details='${JSON.stringify(person.details)}'>Perfil</button>
            ${role !== "Dirección General" && role !== "Limpieza y Mantenimiento" ? 
                `<button class="kpi-btn" 
                         data-name="${person.name}" 
                         data-kpis='${JSON.stringify(person.kpis || {})}'>KPIs</button>` : ''}
        `;
        peopleContainer.appendChild(card);
    });

    // Initialize subroles based on URL
    if (roles[role] && Object.keys(roles[role].subroles).length > 0) {
        const subroleDiv = document.getElementById(`subrole_${role}`);
        if (subroleDiv) {
            subroleDiv.style.display = 'block';
            subroleDiv.previousElementSibling.querySelector('.arrow').textContent = '▲';
        }
    }

    // Add event listeners for profile buttons
    document.querySelectorAll('.profile-btn').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            const photo = this.getAttribute('data-photo');
            const details = JSON.parse(this.getAttribute('data-details'));

            document.getElementById('modalName').innerText = name;
            document.getElementById('modalImage').src = photo;
            document.getElementById('profileModal').style.display = 'block';

            const ctx = document.getElementById('radarChart').getContext('2d');
            if (window.myChart) window.myChart.destroy();
            window.myChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: Object.keys(details),
                    datasets: [{
                        label: 'Actitudes',
                        data: Object.values(details),
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 100,
                            ticks: { font: { size: 14 } }
                        }
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: { enabled: true }
                    }
                }
            });
        });
    });

    // Add event listeners for KPI buttons
    let currentKpis = {};
    document.querySelectorAll('.kpi-btn').forEach(button => {
        button.addEventListener('click', function() {
            const name = this.getAttribute('data-name');
            currentKpis = JSON.parse(this.getAttribute('data-kpis'));
            document.getElementById('kpiPersonName').innerText = name;
            document.getElementById('kpiModal').style.display = 'block';
        });
    });

    // Add event listeners for KPI option buttons
    document.querySelectorAll('.kpi-option-btn').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const personName = document.getElementById('kpiPersonName').innerText;
            document.getElementById('kpiModal').style.display = 'none';

            document.getElementById('kpiResultsTitle').innerText = `${category} para ${personName}`;
            const tableBody = document.getElementById('kpiResultsTableBody');
            tableBody.innerHTML = '';

            if (currentKpis[category]) {
                currentKpis[category].forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${item.no}</td>
                        <td>${item.ea}</td>
                        <td>${item.fi}</td>
                        <td>${item.ge}</td>
                        <td>${item.af}</td>
                        <td>${item.dg}</td>
                        <td>${item.e}</td>
                        <td>${item.o}</td>
                        <td>${item.indicador}</td>
                        <td>${item.kpi}</td>
                        <td>${item.meta}</td>
                        <td>${item.responsable}</td>
                        <td>${item.resultado}</td>
                    `;
                    tableBody.appendChild(row);
                });
            } else {
                const row = document.createElement('tr');
                row.innerHTML = `<td colspan="13">No hay datos disponibles para esta categoría.</td>`;
                tableBody.appendChild(row);
            }

            document.getElementById('kpiResultsModal').style.display = 'block';
        });
    });
}

// Function to load header (assuming header.php is converted to header.html)
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));
}

// Function to handle logout
function logout() {
    window.location.href = "Login.html";
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    populateSidebar();
    populateContent();
});