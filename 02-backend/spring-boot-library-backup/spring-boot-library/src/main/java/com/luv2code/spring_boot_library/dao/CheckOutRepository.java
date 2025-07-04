//package com.luv2code.spring_boot_library.dao;
//
//import com.luv2code.spring_boot_library.entity.Checkout;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//
//import java.util.List;
//
//public interface CheckOutRepository extends JpaRepository<Checkout, Long> {
//
//    Checkout findByUserEmailAndBookId(String userEmail, Long bookId);
//
//    List<Checkout> findBooksByUserEmail(String userEmail);
//
//    @Modifying
//    @Query("delete from Checkout where book_id in :book_id")
//    void deleteAllByBookId(@Param("book_id") Long bookId);
//}



package com.luv2code.spring_boot_library.dao;

import com.luv2code.spring_boot_library.entity.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface CheckOutRepository extends JpaRepository<Checkout, Long> {

    Checkout findByUserEmailAndBookId(String userEmail, Long bookId);

    List<Checkout> findBooksByUserEmail(String userEmail);

    @Modifying
    @Transactional
    void deleteAllByBookId(Long bookId);
}
