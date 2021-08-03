//name에 캐릭터명
//descript에 설명
//good에 좋은 궁합 MBTI
//bad에 나쁜 궁합 MBTI

var MBTIs = {
    'I': {
        'N': {
            'T': {
                'P': {
                    'name': 'INTP',
                    'descript': 'INTP입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                },
                'J': {
                    'name': 'INTJ',
                    'descript': 'INTJ입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                }
            },
            'F': {
                'P': {
                    'name': 'INFP',
                    'descript': 'INFP입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                },
                'J': {
                    'name': 'INFJ',
                    'descript': 'INFJ입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                }
            }
        },
        'S': {
            'T': {
                'P': {
                    'name': 'ISTP',
                    'descript': 'ISTP입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                },
                'J': {
                    'name': 'ISTJ',
                    'descript': 'ISTJ입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                }
            },
            'F': {
                'P': {
                    'name': 'ISFP',
                    'descript': 'ISFP입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                },
                'J': {
                    'name': 'ISFJ',
                    'descript': 'ISFJ입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                }
            }
        }
    },
    'E': {
        'N': {
            'T': {
                'P': {
                    'name': 'ENTP',
                    'descript': 'ENTP입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                },
                'J': {
                    'name': 'ENTJ',
                    'descript': 'ENTJ입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                }
            },
            'F': {
                'P': {
                    'name': 'ENFP',
                    'descript': 'ENFP입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                },
                'J': {
                    'name': 'ENFJ',
                    'descript': 'ENFJ입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                }
            }
        },
        'S': {
            'T': {
                'P': {
                    'name': 'ESTP',
                    'descript': 'ESTP입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                },
                'J': {
                    'name': 'ESTJ',
                    'descript': 'ESTJ입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                }
            },
            'F': {
                'P': {
                    'name': 'ESFP',
                    'descript': 'ESFP입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                },
                'J': {
                    'name': 'ESFJ',
                    'descript': 'ESFJ입니다 ;)',
                    'good': 'ESFJ',
                    'bad': 'ESFP',
                    'img': 'temp-result'
                }
            }
        }
    }
}

var questions = [
    {
        "question": "안녕1",
        "answers": {
            true: {
                "text": "저는 I입니다",
                "value": "I"
            },
            false: {
                "text": "저는 E입니다",
                "value": "E"
            }
        }
    },
    {
        "question": "안녕2",
        "answers": {
            true: {
                "text": "저는 N입니다",
                "value": "N"
            },
            false: {
                "text": "저는 S입니다",
                "value": "S"
            }
        }
    },
    {
        "question": "안녕3",
        "answers": {
            true: {
                "text": "저는 T입니다",
                "value": "T"
            },
            false: {
                "text": "저는 F입니다",
                "value": "F"
            }
        }
    },
    {
        "question": "안녕4",
        "answers": {
            true: {
                "text": "저는 P입니다",
                "value": "P"
            },
            false: {
                "text": "저는 J입니다",
                "value": "J"
            }
        }
    }
]