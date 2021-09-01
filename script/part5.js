// 유어클래스의 requirement를 참조하여, .schema.sql에 추가로 구성해주세요.

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-1-1. category 테이블의 구조를 보기위한 SQL을 작성해주세요.
        - 요구사항에 맞는 category 테이블을 작성해야만, 테스트를 통과합니다.
*/
const PART5_1_1 = `DESC category`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-1-2. content_category 테이블의 구조를 보기위한 SQL을 작성해주세요.
        - 요구사항에 맞는 content_category 테이블을 작성해야만, 테스트를 통과합니다.
*/
const PART5_1_2 = `DESC content_category`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-1-3. role 테이블의 구조를 보기위한 SQL을 작성해주세요.
        - 요구사항에 맞는 role 테이블을 작성해야만, 테스트를 통과합니다.
*/
const PART5_1_3 = `DESC role`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-1-4. user 테이블의 구조를 보기위한 SQL을 작성해주세요.
        - 요구사항에 맞는 user 테이블을 작성해야만, 테스트를 통과합니다.
*/
const PART5_1_4 = `DESC user`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-1. category 테이블에 존재하는 데이터에서 id, name을 찾는 SQL을 작성해주세요.
*/

const PART5_2_1 = `SELECT id, name
                    FROM category`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-2. user의 name과 email 그리고 그 user가 속한 role name(컬럼명: roleName)을 찾기 위한 SQL을 작성해주세요.
        - 속한 role이 없더라도, user의 name과 email,role name을 모두 찾아야합니다.
*/
const PART5_2_2 = `SELECT u.name, u.email, role.name as roleName
                    FROM user as u
                    LEFT JOIN role ON u.roleId = role.id`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-3. 어느 role에도 속하지 않는 user의 모든 컬럼 데이터를 찾기위한 SQL을 작성해주세요.
*/
const PART5_2_3 = `SELECT *
                    FROM user as u
                    WHERE roleId IS NULL`;

/*
----------------------------------------------------------------------------------------------
    TODO: content_category 테이블의 의미를 테이블 관계로서 이해하고 있는지 점검해주세요. 질문자체가 이해가 안된다면, Help-Desk에 질문해주세요.
----------------------------------------------------------------------------------------------    
*/

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-4. content_category 테이블에 존재하는 모든 칼럼의 데이터를 찾기위한 SQL을 작성해주세요.
*/
const PART5_2_4 = `SELECT *
                    FROM content_category`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-5. jiSungPark이 작성한 content의 title을 찾기위한 SQL을 작성해주세요.
*/
const PART5_2_5 = `SELECT title
                    FROM content as c
                    LEFT JOIN user as u ON c.userId = u.id
                    WHERE u.name = 'jiSungPark'`;

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-6. JiSungPark이 작성한 content의 category name을 찾기위한 SQL을 작성해주세요.
*/
<<<<<<< HEAD
const PART5_2_6 = `SELECT cate.name
                    FROM user as u
                    LEFT JOIN content as c ON u.id = c.userId
                    LEFT JOIN content_category as c_c ON c.id = c_c.contentId
                    LEFT JOIN category as cate ON c_c.categoryId = cate.id
                    WHERE u.name = 'jiSungPark' `;
=======
const PART5_2_6 = `SELECT category.name
                    FROM content
                    LEFT JOIN user ON content.userId = user.id
                    LEFT JOIN content_category ON content.id = content_category.contentId
                    LEFT JOIN category ON content_category.categoryId = category.id
                    WHERE user.name = 'jiSungPark'
                    `;
>>>>>>> a27a519ae2f360ce09608ebce0bba7243b763e45

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-7. category의 name이 soccer인 content의 title, body, created_at을 찾기위한 SQL을 작성해주세요.
*/
<<<<<<< HEAD
const PART5_2_7 = `SELECT c.title, c.body, c.created_at
                    FROM content as c
                    LEFT JOIN content_category as c_c ON c.id = c_c.contentId
                    LEFT JOIN category as cate ON c_c.categoryId = cate.id
                    WHERE name = 'soccer'`;
=======
const PART5_2_7 = `SELECT content.title, content.body, content.created_at
                    FROM category
                    LEFT JOIN content_category ON content_category.categoryId = category.id
                    LEFT JOIN content ON content.id = content_category.contentId
                    WHERE category.name = 'soccer'`;
>>>>>>> a27a519ae2f360ce09608ebce0bba7243b763e45

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-8. category의 name이 soccer인 content의 title, body, created_at, user의 name을 찾기위한 SQL을 작성해주세요.
*/
<<<<<<< HEAD
const PART5_2_8 = `SELECT c.title, c.body, c.created_at, u.name
                    FROM user as u 
                    LEFT JOIN content as c ON u.id = c.userId
                    LEFT JOIN content_category as c_c ON c.id = c_c.contentId
                    LEFT JOIN category as cate ON c_c.categoryId = cate.id
                    WHERE cate.name = 'soccer'`;
=======
const PART5_2_8 = `SELECT content.title, content.body, content.created_at, user.name
                    FROM category
                    LEFT JOIN content_category ON content_category.categoryId = category.id
                    LEFT JOIN content ON content.id = content_category.contentId
                    LEFT JOIN user ON user.id = content.userId
                    WHERE category.name = 'soccer'`;
>>>>>>> a27a519ae2f360ce09608ebce0bba7243b763e45

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-9. duRiCha가 작성한 글의 개수 (컬럼명: ContentCount)를 출력하기 위한 SQL을 작성해주세요.
*/
const PART5_2_9 = `SELECT COUNT(*) as ContentCount
<<<<<<< HEAD
                    FROM user as u
                    LEFT JOIN content as c ON u.id = c.userId
                    WHERE u.name = 'duRiCha'`;
=======
                    FROM content
                    LEFT JOIN user ON content.userId = user.id
                    WHERE user.name = 'duRiCha'`;
>>>>>>> a27a519ae2f360ce09608ebce0bba7243b763e45

/*
----------------------------------------------------------------------------------------------
    TODO: Q 5-2-10. 각 user(컬럼명: name)가 작성한 글의 개수 (컬럼명: ContentCount)를 출력하기 위한 SQL을 작성해주세요.
*/
<<<<<<< HEAD
const PART5_2_10 = `SELECT name.name, COUNT(c.title) as ContentCount
                    FROM user as name
                    LEFT JOIN content as c ON name.id = c.userId
                    GROUP BY name.name`;
=======
const PART5_2_10 = `SELECT user.name as name, COUNT(content.title) as ContentCount
                    FROM content
                    RIGHT JOIN user ON content.userId = user.id
                    GROUP BY user.name
                    `;
>>>>>>> a27a519ae2f360ce09608ebce0bba7243b763e45

module.exports = {
  PART5_1_1,
  PART5_1_2,
  PART5_1_3,
  PART5_1_4,
  PART5_2_1,
  PART5_2_2,
  PART5_2_3,
  PART5_2_4,
  PART5_2_5,
  PART5_2_6,
  PART5_2_7,
  PART5_2_8,
  PART5_2_9,
  PART5_2_10
};
